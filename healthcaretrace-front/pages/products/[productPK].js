import { useRouter } from "next/router";
import Navbar from "/components/navbar/Navbar";
import LeftNavBar from "../../components/projectPage/LeftNavBar";
import Timeline from "../../components/timeline/timeline"

const SpecificPage = () => {

    const router = useRouter()
    const path = router.query.navitem
    let CenterPage = ProductBacklog;
    if (path === "board") {
        CenterPage = Board;
    }
    else if (path === "sprints") {
        CenterPage = Sprints
    }
    else if (path === "productBacklog") {
        CenterPage = ProductBacklog
    }
    return (<div>
        <Navbar />
        <LeftNavBar />
        <Timeline />
    </div>)
}

export default SpecificPage;