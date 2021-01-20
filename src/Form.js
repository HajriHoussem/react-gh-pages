import React, { Component } from "react";

class Form extends Component {
render() {

    
return (
    <div>
        <form>
    <label htmlFor="nom">Nom:</label><br></br>
    <input type="text" id="nom" name="nom"></input><br></br>
    <label htmlFor="prenom">Prenom:</label><br></br>
    <input type="text" id="prenom" name="prenom"></input><br></br>
    <label htmlFor="sexe">Sexe:</label><br></br>
    <input type="radio"  name="sexe" value="male"></input>

    
    <label htmlFor="male">Male</label>
    <input type="radio"  name="sexe" value="female"></input>
    <label htmlFor="female">Female</label><br></br>
  </form>  
  <div>
  <form>
  <div className="form-group">
    <label htmlFor="email">adresse Email</label>
    <input type="email" className="form-control"></input>
    <label htmlFor="mdp">mot de passe</label>
    <input type="password" className="form-control"></input>
    
  </div>
  <div className="form-group">
    <label htmlFor="test">TEST</label>
    <select className="form-control">
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
  </div>

  <div className="form-group">
    <label htmlFor="description">Description</label>
    <textarea className="form-control" rows="3"></textarea>
  </div>
  <button type="button" className="btn btn-primary">Submit</button>
</form>
  </div>
  </div>
  
);
} }

export default Form;