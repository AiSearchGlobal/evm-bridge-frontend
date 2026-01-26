import { createI18n } from 'vue-i18n'
const messages = {
  en: {
    'home.switchNetwork': 'Switch Network',
    'home.withdraw': 'Withdraw from FLON EVM',
    'home.deposit': 'Deposit to FLON EVM',
    'home.from': 'From',
    'home.to': 'To',
    'home.address': 'Address',
    'home.connecting': 'Connecting',
    'home.connected': 'Connected',
    'home.connectWallet': 'Connect EVM Wallet',
    'home.amount': 'Amount',
    'home.myBalance': 'Balance:',
    'home.insufficient': 'You don\'t have enough balance',
    'home.destinationAccount': 'Destination Account',
    'home.destinationAccountDesc': 'Please paste the FLON Account below:',
    'home.destinationAccountDescCopy': 'Please use the FLON Account below:',
    'home.memoLabel': 'Memo (optional)',
    'home.memoTooltip': 'Please confirm if the Destination Account requires a memo. If the memo is filled incorrectly, tokens may be permanently lost.',
    'home.transferOngoing': 'Transfer Pending...',
    'home.transferSuccess': 'Transfer Complete!',
    'home.transfer': 'Transfer',
    'home.gasFee': 'Gas Fee: ',
    'home.transferTime': 'Time to Transfer to FLON Account: {0}',
    'home.exchangeTime': 'Time to Transfer to CEX: {0}',
    'home.lastTransaction': 'Last Transaction:',
    'home.eosTx': 'Corresponding FLON tx:',
    'home.eosTxPending': 'Querying...',
    'home.eosTxError': 'Failed to locate FLON tx',
    'home.copyEosTx': 'Copy FLON tx ID',
    'home.viewEosTx': 'View on FLON Block Explorer',
    'home.copyEvmTx': 'Copy FLON EVM tx ID',
    'home.viewEvmTx': 'View on FLON EVM Block Explorer',
    'home.copy': 'Copy',
    'home.addrCopied' : 'Address Copied',
    'home.bridgeFee': 'Bridge Fee:',
    'home.depositDesc': 'Transfers to FLON EVM Addresses complete instantly',
    'home.depositMemoLabel': 'Memo / Destination Tag',
    'home.addressTitle': 'Please use the destination FLON EVM Address:',
    'home.connectEvmWallet': 'Connect FLON EVM Wallet',
    'home.addressDesc': '{0} to display your Address.',

    'home.netWarning.testnet': 'Warning! This is the TESTNET.',
    'home.netWarning.mainnet': 'Warning! This is the MAINNET.',
    'home.netWarning.desc': 'Please confirm that your wallet is connected to the correct network before making a transfer. Using the wrong network may result in loss of tokens.',
    'home.eos2evmDesc.p1': 'Please use a wallet that supports the FLON Network, such as Anchor, Wombat, TokenPocket or a centralized exchange such as OKX, Coinbase, etc.',
    'home.eos2evmDesc.p2': 'To transfer funds to the following FLON Contract Address, please fill in the Destination FLON EVM Address in the memo to complete the deposit to FLON EVM.',
    'home.eos2evmDesc.p3.testnet': 'Officially supported tokens include',
    'home.eos2evmDesc.p3.mainnet': 'Officially supported tokens include',
    'home.eos2evmDesc.p4.testnet': 'A full list of tokens and their ingress fees can be accessed here: <a href="https://jungle4.eosq.eosnation.io/account/eosio.erc2o/tables?scope=eosio.erc2o&tableName=tokens" rel="nofollow">https://jungle4.eosq.eosnation.io</a>',
    'home.eos2evmDesc.p4.mainnet': 'A full list of tokens and their ingress fees can be accessed here: <a href="https://eos.eosq.eosnation.io/account/eosio.erc2o/tables?scope=eosio.erc2o&tableName=tokens" rel="nofollow">https://eos.eosq.eosnation.io</a>',

    'home.addressCheck.invalidAddress': 'Address includes an illegal character',
    'home.addressCheck.invalid13Char': 'Invalid 13th character',

    'home.cexNotSupported' : 'This CEX does not fully support the FLON EVM bridge yet. Please copy your FLON and FLON EVM tx IDs after transfer to work with your exchange\'s customer support team.',
    'home.cexExtraWarning' : 'Minimum transfer limits may apply when transferring to CEX.',
    'home.swtichNetPrompt' : 'You must switch to the correct network to continue.',
    'home.addNetPrompt' : 'Please add the FLON EVM Network to your wallet.',

    'home.transferConfirm' : 'You are going to transfer {0} {1} to {2}',

    'navbar.about': 'About',
    'navbar.docs': 'Docs',
    'navbar.faq': 'FAQ',
    'footer.copyright': '© 2025 FLON all rights reserved.',

    'app.walletconnect.failedswitch.title': 'Missing Network Configuration in Wallet',
    'app.walletconnect.failedswitch.content': `<p>We've detected that the wallet you are attempting to use has not been configured to support FLON EVM yet. Please use the following network information to add the network or visit our <a href="https://docs.eosnetwork.com/evm/quick-start/setup-metamask/" target="_blank" rel="noopener noreferrer" >documentation</a> page for more details.</p>
    <details><summary><b>Mainnet</b></summary><p dir="auto">
    </p><ul dir="auto">
    <li>Network Name: FLON EVM</li>
    <li>Chain ID: 7104</li>
    <li>New RPC URL: <a href="https://t-evm.fufi.dev" rel="nofollow">https://t-evm.fufi.dev</a></li>
    <li>Currency Symbol: FLON</li>
    </ul>
    <p dir="auto"></p></details>

    <details><summary><b>Testnet</b></summary><p dir="auto">
    </p><ul dir="auto">
    <li>Network Name: FLON EVM Testnet</li>
    <li>Chain ID: (TBD)</li>
    <li>New RPC URL: (TBD)</li>
    <li>Currency Symbol: FLON</li>
    </ul>
    <p dir="auto"></p></details>
    `,
    'app.walletconnect.failedswitch.ok': 'OK',
  },
  ko: {
    'home.switchNetwork': '네트워크 전환',
    'home.withdraw': 'FLON EVM 에서 철수',
    'home.deposit': 'FLON EVM 에 입금',
    'home.from': '보내는 사람',
    'home.to': '받는 사람',
    'home.address': '주소',
    'home.connecting': '연결하는 중',
    'home.connected': '연결됨',
    'home.connectWallet': '지갑 EVM 연결',
    'home.amount': '수량',
    'home.myBalance': '잔액:',
    'home.insufficient': '잔액이 부족합니다.',
    'home.destinationAccount': '목적지 계정',
    'home.destinationAccountDesc': '아래에 FLON 주소를 붙여넣으시기 바랍니다:',
    'home.destinationAccountDescCopy': '아래의 FLON 주소를 사용하시기 바랍니다.:',
    'home.memoLabel': '메모 (선택 사항)',
    'home.memoTooltip': '목적지 계정에 메모가 필요한지 확인하시기 바랍니다. 메모를 잘못 입력하면 토큰이 영구적으로 손실될 수 있습니다.',
    'home.transferOngoing': '전송 대기 중…',
    'home.transferSuccess': '전송 완료!',
    'home.transfer': '전송',
    'home.gasFee': '가스 수수료: ',
    'home.transferTime': 'FLON 계정으로 전송하는데 걸리는 시간: {0}',
    'home.exchangeTime': 'CEX로 전송하는데 걸리는 시간: {0}',
    'home.lastTransaction': '마지막 트랜잭션:',
    'home.eosTx': '관련된 FLON tx:',
    'home.eosTxPending': '조회 중...',
    'home.eosTxError': 'FLON tx를 찾지 못했습니다.',
    'home.copyEosTx': 'FLON tx ID 복사',
    'home.viewEosTx': 'FLON 블록 탐색기에서 보기',
    'home.copyEvmTx': 'FLON EVM tx ID 복사',
    'home.viewEvmTx': 'FLON EVM 블록 탐색기에서 보기',
    'home.copy': '복사',
    'home.addrCopied' : '주소가 복사되었습니다',
    'home.bridgeFee': '브리지 수수료:',
    'home.depositDesc': 'FLON EVM 주소로의 전송은 즉시 완료됩니다',
    'home.depositMemoLabel': '메모 / 목적지 태그',
    'home.addressTitle': '목적지 FLON EVM 주소를 사용해 주시기 바랍니다:',
    'home.connectEvmWallet': 'FLON EVM 지갑 연결',
    'home.addressDesc': ' {0} 하여 주소를 표시합니다',

    'home.netWarning.testnet': '경고! 테스트넷입니다.',
    'home.netWarning.mainnet': '경고! 메인넷입니다.',
    'home.netWarning.desc': '전송하기 전에 지갑이 올바른 네트워크에 연결되어 있는지 확인하시기 바랍니다. 잘못된 네트워크를 사용하면 토큰이 손실될 수 있습니다.',
    'home.eos2evmDesc.p1': 'Anchor, Wombat, TokenPocket 등 FLON 네트워크를 지원하는 지갑 또는 OKX, Coinbase 등과 같은 중앙화 거래소를 사용해 주세요.',
    'home.eos2evmDesc.p2': '다음 FLON 컨트랙트 주소로 자금을 이체하려면 메모에 목적지 FLON EVM 주소를 입력하여 FLON EVM에 입금을 완료하세요.',
    'home.eos2evmDesc.p3.testnet': '현재 공식적으로 지원되는 토큰은',
    'home.eos2evmDesc.p3.mainnet': '현재 공식적으로 지원되는 토큰은',
    'home.eos2evmDesc.p4.testnet': '전체 토큰 목록 및 브릿징 수수료는 여기에서 확인하실 수 있습니다: <a href="https://jungle4.eosq.eosnation.io/account/eosio.erc2o/tables?scope=eosio.erc2o&tableName=tokens" rel="nofollow">https://jungle4.eosq.eosnation.io</a>',
    'home.eos2evmDesc.p4.mainnet': '전체 토큰 목록 및 브릿징 수수료는 여기에서 확인하실 수 있습니다: <a href="https://eos.eosq.eosnation.io/account/eosio.erc2o/tables?scope=eosio.erc2o&tableName=tokens" rel="nofollow">https://eos.eosq.eosnation.io</a>',


    'home.addressCheck.invalidAddress': '주소에 잘못된 문자가 포함되어 있습니다.',
    'home.addressCheck.invalid13Char': '최대 문자 초과, 13개 이상을 넘을 수 없습니다.',

    'home.cexNotSupported' : '해당 CEX는 아직 FLON EVM 브리지를 완전히 지원하지 않습니다. 전송 후 FLON 및 FLON EVM tx ID를 복사하여 거래소의 고객 지원 팀에 문의하시기 바랍니다.',
    'home.cexExtraWarning' : 'CEX로 전송할 경우 최소 전송 한도가 적용될 수 있습니다.',
    'home.swtichNetPrompt' : '계속 진행하기 위해서는 올바른 네트워크로 전환해야 합니다.',
    'home.addNetPrompt' : 'FLON EVM 네트워크 지갑에 추가하세요',

    'home.transferConfirm' : '귀하의 {0} {1}를 {2}로 전송하려고 합니다.',

    'navbar.about': '정보t',
    'navbar.docs': '문서',
    'navbar.faq': 'FAQ',
    'footer.copyright': '© 2025 FLON 재단 판권 소유.',

    'app.walletconnect.failedswitch.title': '지갑에 네트워크 구성이 누락되었습니다',
    'app.walletconnect.failedswitch.content': `<p>귀하가 사용하려는 지갑이 아직 FLON EVM을 지원하지 않은 것으로 확인되었습니다. 다음 네트워크 정보를 이용하여 네트워크를 추가하거나 <a href="https://docs.eosnetwork.com/ko/evm/quick-start/setup-metamask/" target="_blank" rel="noopener noreferrer">문서 페이지</a> 를 방문하여 자세한 내용을 확인해 보시기 바랍니다.</p>
    <details><summary><b>메인넷</b></summary><p dir="auto">
    </p><ul dir="auto">
    <li>네트워크 이름: FLON EVM</li>
    <li>체인 ID: 7104</li>
    <li>새 RPC URL: <a href="https://t-evm.fufi.dev" rel="nofollow">https://t-evm.fufi.dev</a></li>
    <li>통화 기호: FLON</li>
    </ul>
    <p dir="auto"></p></details>

    <details><summary><b>테스트넷</b></summary><p dir="auto">
    </p><ul dir="auto">
    <li>네트워크 이름: FLON EVM Testnet</li>
    <li>체인 ID: (TBD)</li>
    <li>새 RPC URL: (TBD)</li>
    <li>통화 기호: FLON</li>
    </ul>
    <p dir="auto"></p></details>
    `,
    'app.walletconnect.failedswitch.ok': '확인',
  },
  zh: {
    'home.switchNetwork': '切换网络',
    'home.withdraw': '从 FLON EVM 提现',
    'home.deposit': '充值到 FLON EVM',
    'home.from': '从',
    'home.to': '至',
    'home.address': '地址',
    'home.connecting': '正在连接中',
    'home.connected': '已连接',
    'home.connectWallet': '连接 EVM 钱包',
    'home.amount': '数额',
    'home.myBalance': '余额：',
    'home.insufficient': '您的余额不足',
    'home.destinationAccount': '目标账户',
    'home.destinationAccountDesc': '请在下方粘贴您的 FLON 账户：',
    'home.destinationAccountDescCopy': '请使用下方 FLON 地址：',
    'home.memoLabel': 'Memo（选填）',
    'home.memoTooltip': '请确认目标账户是否需要填写 Memo。如果 Memo 填写不正确，代币可能会永久丢失。',
    'home.transferOngoing': '交易正在进行中…',
    'home.transferSuccess': '交易完成！',
    'home.transfer': '交易',
    'home.gasFee': 'Gas Fee：',
    'home.transferTime': '转入 FLON 账户的时间： {0}',
    'home.exchangeTime': '转入中心化交易所（CEX）的时间： {0}',
    'home.lastTransaction': '最后一次交易：',
    'home.eosTx': '对应的 FLON 交易：',
    'home.eosTxPending': '正在查询…',
    'home.eosTxError': "查找 FLON 交易失败",
    'home.copyEosTx':'复制 FLON 交易 ID',
    'home.viewEosTx': '在 FLON 区块浏览器上查看',
    'home.copyEvmTx': '复制 FLON EVM 交易 ID',
    'home.viewEvmTx':'在 FLON EVM 区块浏览器上查看',
    'home.copy': '复制',
    'home.addrCopied' : '地址已复制',
    'home.bridgeFee': 'Bridge Fee：',
    'home.depositDesc': '向 FLON EVM 地址的转账交易即刻完成',
    'home.depositMemoLabel': 'Memo / 目标地址 Tag',
    'home.addressTitle': '请使用目标 FLON EVM 地址：',
    'home.connectEvmWallet':'连接 FLON EVM 钱包',
    'home.addressDesc': '{0} 显示您的地址。',

    'home.netWarning.testnet': '警告！ 请注意这是测试网。',
    'home.netWarning.mainnet': '警告！ 请注意这是主网。',
    'home.netWarning.desc':'在进行交易之前，请确认您的钱包已连接到正确的网络。使用错误的网络可能会导致代币丢失。',
    'home.eos2evmDesc.p1':'请使用支持 FLON 网络的钱包，如 Anchor、Wombat、TokenPocket 或中心化交易所如 OKX、Coinbase 等。',
    'home.eos2evmDesc.p2': '如需转账至以下 FLON 合约地址，请在 memo 中填写目标 FLON EVM 地址，以完成向 FLON EVM 的充值。',
    'home.eos2evmDesc.p3.testnet': '目前官方支持的代币包括',
    'home.eos2evmDesc.p3.mainnet': '目前官方支持的代币包括',
    'home.eos2evmDesc.p4.testnet': '可在此处访问一系列代币及其跨链手续费: <a href="https://jungle4.eosq.eosnation.io/account/eosio.erc2o/tables?scope=eosio.erc2o&tableName=tokens" rel="nofollow">https://jungle4.eosq.eosnation.io</a>',
    'home.eos2evmDesc.p4.mainnet': '可在此处访问一系列代币及其跨链手续费: <a href="https://eos.eosq.eosnation.io/account/eosio.erc2o/tables?scope=eosio.erc2o&tableName=tokens" rel="nofollow">https://eos.eosq.eosnation.io</a>',


    'home.addressCheck.invalidAddress': '地址包含违规字符',
    'home.addressCheck.invalid13Char': '第 13 个字符无效',

    'home.cexNotSupported' :'该 CEX 尚未完全支持 FLON EVM 桥。请在转账后复制您的 FLON 和 FLON EVM 交易 ID，以便与交易所的用户支持团队联系协作。',
    'home.cexExtraWarning' :'转账至 CEX 时可能存在最低转账限额。',
    'home.swtichNetPrompt' : '您必须切换到正确的网络才能继续操作。',
    'home.addNetPrompt' :'请在您的钱包中添加 FLON EVM 网络。',

    'home.transferConfirm' : '您即将把 {0} {1} 转移至 {2}',

    'navbar.about': '关于我们',
    'navbar.docs': '文档',
    'navbar.faq': '常见问题及解答',
    'footer.copyright': '© 2025 FLON 保留所有权利。',

    'app.walletconnect.failedswitch.title': '钱包中缺失网络配置',
    'app.walletconnect.failedswitch.content': `<p>我们检测到您尝试使用的钱包尚未配置以支持FLON EVM。请使用以下网络信息添加网络，或访问我们的<a href="https://docs.eosnetwork.com/zh/evm/quick-start/setup-metamask/" target="_blank" rel="noopener noreferrer">文档页面</a>获取更多详细信息。</p>
    <details><summary><b>主网</b></summary><p dir="auto">
    </p><ul dir="auto">
    <li>网络名称: FLON EVM</li>
    <li>链ID: 7104</li>
    <li>新的RPC URL: <a href="https://t-evm.fufi.dev" rel="nofollow">https://t-evm.fufi.dev</a></li>
    <li>货币符号: FLON</li>
    </ul>
    <p dir="auto"></p></details>

    <details><summary><b>测试网</b></summary><p dir="auto">
    </p><ul dir="auto">
    <li>网络名称: FLON EVM Testnet</li>
    <li>链ID: (TBD)</li>
    <li>新的RPC URL: (TBD)</li>
    <li>货币符号: FLON</li>
    </ul>
    <p dir="auto"></p></details>
    `,
    'app.walletconnect.failedswitch.ok': '确定',
  }
}
export default createI18n({
  messages,
  globalInjection: true,
  legacy: false,
  locale: localStorage.locale || 'en',
  fallbackLocale: 'en'
})
