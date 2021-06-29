import t1 from '../../images/TestImages/dubai.png';
import t2 from '../../images/TestImages/announcer.jpg';
import t4 from '../../images/TestImages/yvr.JPG';
import t5 from '../../images/TestImages/sfu-night.png';
import t6 from '../../images/TestImages/sfu-day.jpg';

function PhotoGallery(){
    return(
    <section className="photo-grid grid-container project-spacer">
        <div className="max-bleed">
            <div className="sub-container grid-gap-add">
                <div className="max-col">
                    <div className="img-fit">
                        <img loading="lazy" src={t1} alt="" />
                    </div>
                </div>
                <div className="span-50">
                    <div className="img-fit">
                        <img loading="lazy" src={t4} alt="" />
                    </div>
                </div>
                <div className="span-50">
                    <div className="img-fit">
                        <img loading="lazy" src={t6} alt="" />
                    </div>
                </div>
                <div className="span-50">
                    <div className="img-fit">
                        <img loading="lazy" src={t5} alt="" />
                    </div>
                </div>
                <div className="span-50">
                    <div className="img-fit">
                        <img loading="lazy" src={t2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
} export default PhotoGallery;