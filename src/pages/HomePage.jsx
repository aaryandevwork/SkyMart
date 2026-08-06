import CategorySection from "../components/CategorySection";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import TopRatedAndNewArrived from "../components/TopRatedAndNewArrived";

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