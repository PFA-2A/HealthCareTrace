import { useWallet } from '@solana/wallet-adapter-react'
import { SOLANA_HOST } from '../utils/const'
import { TOKEN_PROGRAM_ID } from '@solana/spl-token'
import useAccount from '../hooks/useAccount'
import getProgramInstance from "../utils/utils"

const anchor = require('@project-serum/anchor')
const utf8 = anchor.utils.bytes.utf8
const {BN, web3} = anchor
const { SystemProgram } = web3
const defaultAccounts = {
  tokeProgram : TOKEN_PROGRAM_ID,
  clock : anchor.web3.SYSVAR_CLOCK_PUBKEY,
  SystemProgram : SystemProgram.programId,
}

export default ()  => {
  const wallet = useWallet()
  const connection = new anchor.web3.Connection(SOLANA_HOST)

  const program = getProgramInstance(connection, wallet)

  //const [tiktoks, setTikToks] = useState([])

  //const [newVideoShow, setNewVideoShow] = useState(false)
  //const [description, setDescription] = useState('')
  //const [videoUrl, setVideoUrl] = useState('')
  //const [userDetail, setUserDetail] = useState()

  const { signup } = useAccount()
  /*const { getTiktoks, likeVideo, createComment, newVideo, getComments } =
    useTiktok(
      setTikToks,
      userDetail,
      videoUrl,
      description,
      setDescription,
      setVideoUrl,
      setNewVideoShow,
    )

  useEffect(() => {
    if (wallet.connected) {
      checkAccount()
      getTiktoks()
    }
  }, [wallet.connected])

  useEffect(() => {
    const intervalId = setInterval(() => {
      // getTiktoks();
    }, 3000)

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId)
  })

  const checkAccount = async () => {
    let [user_pda] = await anchor.web3.PublicKey.findProgramAddress(
      [utf8.encode('user'), wallet.publicKey.toBuffer()],
      program.programId,
    )

    try {
      const userInfo = await program.account.userAccount.fetch(user_pda)
      console.log(userInfo)
      setUserDetail(userInfo)
      setAccount(true)
    } catch (e) {
      setAccount(false)
    }
  } */

    return {wallet, connection, program, signup}
}