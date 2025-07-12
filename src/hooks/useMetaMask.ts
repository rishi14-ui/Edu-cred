import { useState, useEffect } from 'react';

interface MetaMaskState {
  isConnected: boolean;
  account: string | null;
  balance: string | null;
  chainId: string | null;
  networkName: string | null;
  isLoading: boolean;
  error: string | null;
}

interface MetaMaskHook extends MetaMaskState {
  connect: () => Promise<void>;
  disconnect: () => void;
  switchNetwork: (chainId: string) => Promise<void>;
}

declare global {
  interface Window {
    ethereum?: any;
  }
}

export const useMetaMask = (): MetaMaskHook => {
  const [state, setState] = useState<MetaMaskState>({
    isConnected: false,
    account: null,
    balance: null,
    chainId: null,
    networkName: null,
    isLoading: false,
    error: null,
  });

  const getNetworkName = (chainId: string): string => {
    const networks: { [key: string]: string } = {
      '0x1': 'Ethereum Mainnet',
      '0x3': 'Ropsten Testnet',
      '0x4': 'Rinkeby Testnet',
      '0x5': 'Goerli Testnet',
      '0x89': 'Polygon Mainnet',
      '0x13881': 'Polygon Mumbai',
      '0xa86a': 'Avalanche Mainnet',
      '0xa869': 'Avalanche Fuji',
      '0x38': 'BSC Mainnet',
      '0x61': 'BSC Testnet',
    };
    return networks[chainId] || `Unknown Network (${chainId})`;
  };

  const getBalance = async (account: string): Promise<string> => {
    try {
      const balance = await window.ethereum.request({
        method: 'eth_getBalance',
        params: [account, 'latest'],
      });
      // Convert from wei to ETH
      const balanceInEth = parseInt(balance, 16) / Math.pow(10, 18);
      return balanceInEth.toFixed(4);
    } catch (error) {
      console.error('Error getting balance:', error);
      return '0.0000';
    }
  };

  const connect = async (): Promise<void> => {
    if (!window.ethereum) {
      setState(prev => ({ ...prev, error: 'MetaMask is not installed!' }));
      return;
    }

    setState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      const chainId = await window.ethereum.request({
        method: 'eth_chainId',
      });

      const balance = await getBalance(accounts[0]);

      setState(prev => ({
        ...prev,
        isConnected: true,
        account: accounts[0],
        balance,
        chainId,
        networkName: getNetworkName(chainId),
        isLoading: false,
      }));
    } catch (error: any) {
      setState(prev => ({
        ...prev,
        error: error.message || 'Failed to connect to MetaMask',
        isLoading: false,
      }));
    }
  };

  const disconnect = (): void => {
    setState({
      isConnected: false,
      account: null,
      balance: null,
      chainId: null,
      networkName: null,
      isLoading: false,
      error: null,
    });
  };

  const switchNetwork = async (targetChainId: string): Promise<void> => {
    if (!window.ethereum) return;

    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: targetChainId }],
      });
    } catch (error: any) {
      setState(prev => ({ ...prev, error: error.message }));
    }
  };

  useEffect(() => {
    if (!window.ethereum) return;

    const handleAccountsChanged = (accounts: string[]) => {
      if (accounts.length === 0) {
        disconnect();
      } else {
        setState(prev => ({ ...prev, account: accounts[0] }));
        getBalance(accounts[0]).then(balance => {
          setState(prev => ({ ...prev, balance }));
        });
      }
    };

    const handleChainChanged = (chainId: string) => {
      setState(prev => ({
        ...prev,
        chainId,
        networkName: getNetworkName(chainId),
      }));
    };

    window.ethereum.on('accountsChanged', handleAccountsChanged);
    window.ethereum.on('chainChanged', handleChainChanged);

    // Check if already connected
    window.ethereum.request({ method: 'eth_accounts' }).then((accounts: string[]) => {
      if (accounts.length > 0) {
        connect();
      }
    });

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
        window.ethereum.removeListener('chainChanged', handleChainChanged);
      }
    };
  }, []);

  return {
    ...state,
    connect,
    disconnect,
    switchNetwork,
  };
};
</parameter>