import "./style.scss";
import IntroCarousel from "../../components/UI/Carousel/IntroCarousel";
import SearchPanel from "../../components/UI/SearchPanel/SearchPanel";
import VECTOR_2 from "../../assets/images/vector2.svg";
import Category from "../../components/category/Category";
import CardWrapper from "../../components/Layout/CardWrapper";
import CardAuthor from "../../components/UI/Card/Author/CardAuthor";
import { Link } from "react-router-dom";

const index = () => {
    return (
        <section className="intro" style={{ backgroundImage: `url(${VECTOR_2})` }}>
            <div className="container">
                <div className="warpper">
                    <IntroCarousel />
                    <SearchPanel />
                    <Category />

                    <CardWrapper>
                        {"HELLOWORLDD".split("").map((item) => {
                            return (
                                <Link to='/author/1'>
                                    <CardAuthor />
                                </Link>
                            )
                        })}
                    </CardWrapper>
                </div>
            </div>
        </section>
    );
};

export default index;
