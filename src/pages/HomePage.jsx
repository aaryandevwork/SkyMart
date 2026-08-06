import CategorySection from "../components/HomeComponents/CategorySection";
import HeroSection from "../components/HomeComponents/HeroSection";
import StatsSection from "../components/HomeComponents/StatsSection";
import TopRatedAndNewArrived from "../components/HomeComponents/TopRatedAndNewArrived";

const HomePage = () => {
    return(
        <div>
            <h1>home page</h1>
            <HeroSection/>
            <StatsSection />
            <CategorySection />
            <TopRatedAndNewArrived />
        </div>
    )
}

export default HomePage;