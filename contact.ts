import{Telephone} from "./telephone";
import{Email} from "./adresseEmail";
import{Adresse} from "./adresses";


import * as $ from 'jquery'

/**
 * @name Contact
 * @author adrar-july_2020
 * @version 1.0.0
 * @abstract contact model from uml design
 
 */



  export class Contact{
     /**
      * @var Number
      * N° du contact
      */
     private numero: Number;

     
 /**
  * @var String
  * 
  * Nom du contact
  */
 protected nom:String;

 
 /**
  * @var String
  * 
  * Prenom du contact
  */
 protected prenom:String;


 /**
  * 
  * @var Adresse[] adresse du contact
  * 
  */

    private adresses:Adresse[]
    
    


  /**
     * @var Email[]
     * @see Email
     */
    private emails: Email[];

     /**
     * @var Telephone[]
     */
    private phones: Telephone[]

    public constructor() {
        this.adresses = [] // Initialise le tableau des adresses de ce (this)contact
        this.emails = []; // Sets emails array de ce (this) contact
        this.phones = []; // Sets phones array de ce (this) contact
    }

 

 /** 
  * @param Number numero // Number numero a affecter à l'objet courant
    @return Contact retourne l'objet courant
  */

 //creation d'un methode Setnumero
  
 public setNumero(numero:Number): Contact {
     if (numero>=100){
        this.numero=numero//range le parametre numero dans l'attribut numero
        return this

     }

     throw new Error('contact cannot have number lower than 100')// raise an exception
     
    }

    /**
     * 
     * @param  String nom du contact
     * @return Contact
     */

    public setNom(nom:String):Contact{
        this.nom= nom.toUpperCase()
        return this
    }

    
/**
 * 
 * @return string 
 * 
 */

 public getNom():string{
     return this.nom.toString()
 }

 /**
  * 
  * @param String Prenom du contact
  * @return Contact
  */

 public setPrenom(prenom:String):Contact{
    this.prenom=prenom
    return this
}



 public getPrenom():string {
     return this.prenom.toString()

 }

 
 public getAvatar(): JQuery {
    const content: JQuery = $('<p>')
    const avatar: JQuery = $('<i>')
    avatar.html((this.prenom[0] + this.nom[0]).toUpperCase())
    avatar
        .addClass('circle')
        .addClass('avatar')
        .addClass('light')
        .css('margin-right', '.3em')

    content
    //.append equivaut a appenchild creation dans le html
        .append(avatar)
        .append('<span class="title">'+ this.prenom.toString() + ' ' + this.nom.toString())

        const adress:JQuery=$('<ul>')
        this.adresses.forEach((adresse)=>{

            const addressLi:JQuery =$('<li>')
            addressLi.html(adresse.getAdressePostale())// equivalent a textContent()
            addressLi.appendTo(adress)// equiv a appenChild
        })

        content.append(adress)

        const Email:JQuery=$('<ul>')
        this.emails.forEach((email)=>{
            const emailLi:JQuery =$('<li>')
            emailLi.html(email.getEmail())// equivalent a textContent()
            emailLi.appendTo(Email)

        })

        content.append(Email)


        return content




}


/**
 * @param Adresse - Adresse à ajouter au contact
 * @return Contact
 */

public addAdresse(adresse: Adresse): Contact {
    this.adresses.push(adresse)

    return this

  }

/*
 public getAvatar(): String{
    return (this.prenom[0 ]+ this.nom[0]) .toUpperCase()
 }
*/
 
public addEmail(email: Email): Contact {
    this.emails.push(email)

    return this
}

public addPhone(phone: Telephone): Contact {
    this.phones.push(phone)

    return this
}

    

 }
