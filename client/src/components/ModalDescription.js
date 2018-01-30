import React from 'react';


const ModalDescription = (props) => {
    return (
        <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="qtip qtip-dark">
                    <div className="qtip-titlebar">
                        <div className="qtip-title">{props['Title']}</div>
                    </div>
                    <div className="qtip-content">
                        <div className="jtip-quality">{props['Format']}</div>
                        <div className="jtip-top">
                            <div className="jt-info jt-imdb">ID:{props['_id']}</div>
                            <div className="jt-info">Year: 2009</div>
                            <div className="clearfix"></div>
                        </div>
                        <p className="f-desc">
                            {props.description}
                        </p>
                        <div className="block">
                            Genre:{props.genre}
                </div>
                        <div className="block">Actor:{props['Stars']}</div>
                        <div className="jtip-bottom">
                            <button className="btn btn-block btn-primary" data-dismiss="modal">Close</button>
                            <button onClick={props.deleteMovie.bind(this, props._id)} data-dismiss="modal" className="btn btn-block btn-default btn-danger">Delete movie from database</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalDescription;