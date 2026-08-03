import CategorySection from "../components/CategorySection";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";

const HomePage = () => {
    return(
        <div>
            <h1>home page</h1>
            <HeroSection/>
            <StatsSection />
            <CategorySection />
        </div>
    )
}

export default HomePage;