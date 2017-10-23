import React from 'react';
import $ from 'jquery';
import axios from 'axios';
import FormData from 'form-data';

class NewMeal extends React.Component {
    componentDidMount() {
        $('.modal').modal();
    }

    submitMeal(e) {
        e.preventDefault();
        let formData = new FormData();
        formData.append("file", $("#image_file").prop('files')[0]);
        axios.post('/api/upload_meal_image', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(res => {
                axios.post('/api/upload_new_meta', {
                    image: res.data,
                    title: $("#meal_title").val() || "Something tasty...",
                    description: $("#meal_description").val() || "This is really great!!!"
                })
                    .then(res => console.log("Successfully uploaded!"));
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div id="modal1" className="modal bottom-sheet">
                <form>
                    <div className="modal-content">

                        <h4>Add New Meal</h4>
                        <p>Upload Image and add description</p>

                        <div className="file-field input-field">
                            <div className="btn">
                                <span>File</span>
                                <input type="file" id="image_file" name="image_file"/>
                            </div>
                            <div className="file-path-wrapper">
                                <input className="file-path validate" type="text"/>
                            </div>
                        </div>

                        <div className="input-wrapper">

                            <span>Meal Title</span>

                            <div className="input-field inline">
                                <input type="text" id="meal_title" placeholder="Meal Title"/>
                            </div>
                        </div>

                        <div className="input-wrapper">
                            <span>Meal Description</span>
                            <div className="input-field inline">
                                <textarea id="meal_description" className="materialize-textarea"
                                          placeholder="Type meal description here"></textarea>
                            </div>
                        </div>

                    </div>
                    <div className="modal-footer">
                        <input type="submit"
                               className="modal-action modal-close waves-effect waves-green btn-flat"
                               value="Submit Meal" onClick={(e) => this.submitMeal(e)}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default NewMeal;