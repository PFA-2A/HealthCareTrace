import { useRouter } from "next/router";
import Navbar from "/components/navbar/Navbar";
import LeftNavBar from "../../components/timeline/LeftNavBar";
import Timeline from "../../components/timeline/timeline"

const SpecificPage = () => {

    const router = useRouter()
    const path = router.query.navitem
    return (<div>
        <Navbar />
        <LeftNavBar />
        <Timeline />
    </div>)
}

export default SpecificPage;