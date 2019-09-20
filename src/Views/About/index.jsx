import React, {Component} from 'react'

class About extends Component {
    render() {
        return (
            <section
                className="about-container flex justify-center items-center p-4 flex-col w-screen h-full text-gray-800">
                <h1>This project only for Mobile Web 2019</h1>
                <div className="mt-4">
                    <div>
                        Icons made by
                        <a
                            href="https://www.flaticon.com/authors/gregor-cresnar"
                            title="Gregor Cresnar">Gregor Cresnar</a>
                        from
                        <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                        is licensed by
                        <a
                            href="http://creativecommons.org/licenses/by/3.0/"
                            title="Creative Commons BY 3.0"
                            target="_blank">CC 3.0 BY</a >
                    </div>
                </div>
            </section>
        )
    }
}

export default About