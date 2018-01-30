import React from 'react';


class AddMovieModal extends React.Component {
    constructor() {
        super();
        this.state = {

        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState(
            { [e.target.name]: e.target.value }
        )
        console.log(this.state);
    }

    handleSubmit(e) {
        e.preventDefault();
        $('#addMovieModal').modal('hide');
        this.props.addMovie(this.state);
    }

    render() {
        return (
            <div className="modal fade" id="addMovieModal" tabIndex="-1" role="dialog" aria-labelledby="exampleMdodalLabel" aria-hidden="true" >
                <div className="modal-dialog" role="document">
                    <div className="qtip qtip-dark">
                        <div className="qtip-titlebar">
                            <div className="qtip-title">Add movie</div>
                        </div>
                        <div className="qtip-content">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group row">
                                    <label htmlFor="example-text-input" className="col-2 col-form-label">Title</label>
                                    <div className="col-10">
                                        <input onChange={this.handleChange} required className="form-control" name='Title' placeholder='Movie title' type="text" id="example-text-input" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor ="example-text-input" className="col-2 col-form-label">Year</label>
                                    <div className="col-10">
                                        <input onChange={this.handleChange} required className="form-control" name='Realese Year' placeholder='Release year' type="text" id="example-text-input" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor ="example-text-input" className="col-2 col-form-label">Format</label>
                                    <div className="col-10">
                                        <input onChange={this.handleChange} name='Format' required className="form-control" placeholder='Format' type="text" id="example-text-input" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="example-text-input" className="col-2 col-form-label">Actors</label>
                                    <div className="col-10">
                                        <input onChange={this.handleChange} required name='Stars' className="form-control" placeholder='Actors, with comma(e.g. Adam Smith, Bob Marley)' type="text" id="example-text-input" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="example-text-input" className="col-2 col-form-label">Image</label>
                                    <div className="col-10">
                                        <input onChange={this.handleChange} name='picture' className="form-control" placeholder='Poster image url' type="text" id="example-text-input" />
                                    </div>
                                </div>
                                <button className="btn btn-block btn-primary" data-dismiss="modal">Close</button>
                                <button type='submit' className="btn btn-block btn-default btn-success">Add Movie</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default AddMovieModal;