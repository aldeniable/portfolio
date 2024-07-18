import { ACHIEVEMENTS } from "../data/data.js";

export const Achievements = () => {
    return (
        <div className = "border-b border-neutral-900 pb-4">
            <h1 className = "my-20 text-center text-4xl font-bold"> Achievements </h1>
            <div>
                {ACHIEVEMENTS.map((achievement, index) => (
                    <div key = {index} className="mb-8 flex flex-wrap lg:justify-center">
                        <div className = "w-full lg:w-1/4">
                            <img className="mx-5 w-60 rounded" src = {achievement.image} alt={achievement.title} />
                        </div>
                        <div className = "w-full max-w-xl lg:w-3/4">
                            <h6 className = "mb-2 font-semibold"> {achievement.title} </h6>
                            <p className="mb-4 text-neutral-400">
                                {achievement.description}
                            </p>
                            <p className="mb-4 text-neutral-400">
                                <a style={{ color: '#20B2AA' }} href = {achievement.link}> Click here to know more.</a>
                            </p>

                            
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Achievements;