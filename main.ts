import * as $ from 'jquery'
//import class model
import { CellPhone } from './models/cell-phone'
import { Telephone } from './models/telephone'
import {Contact} from './models/Contact'
import{Adresse} from './models/adresses'
import {Email} from './models/adresseEmail'
import './scss/main.scss'
import * as M from 'materialize-css'



/**
 * @name Main
 * @author IDea Factory - Juil. 2020 - jean-luc.a@ideafactory.fr
 * @version 1.0.0
 * @abstract Main application entry point
 * 
 */
class Main {
    public constructor() {
        console.log('Application is ready')

        //create a contact instance
        const jeanLuc:Contact=new Contact()
        jeanLuc.setNumero(100)
        jeanLuc.setNom('Aubert')
        jeanLuc.setPrenom('Jean-Luc')
        const myEmail = new Email()
        myEmail.setEmail('jla@truc.com')
        jeanLuc.addEmail(myEmail) // Add an email to jeanluc object

        const myCellPhone: CellPhone = new CellPhone()
        myCellPhone.setPhoneNumber('0623568974')

        jeanLuc.addPhone(myCellPhone) // Add a phone for jeanluc Contact object

        
        const undefinedTypePhone: Telephone = new Telephone()
        undefinedTypePhone.setPhoneNumber('x-files number')
    

         
        // create a first adress
        const adresse= new Adresse()
        adresse.setAdressePostale('2 rue du bigornaud 66000 Pia')
        jeanLuc.addAdresse(adresse) //Add the adresse for jeanLuc
        
         
        // create a secon adress of jeanLuc
        const mySweetHome= new Adresse()
        mySweetHome.setAdressePostale('2 rue du bigornaud')
        jeanLuc.addAdresse(mySweetHome)  //Add the second adresse for jeanLuc

        
    
        //create a TrudyLatte contac instance
        const TrudyLatte:Contact=new Contact()
        TrudyLatte.setNumero(102)
        TrudyLatte.setNom('Latte')
        TrudyLatte.setPrenom('Trudy')

    
        //create trudy latte adress
        const trudyadresse= new Adresse()
        trudyadresse.setAdressePostale('3 rue du bouchon 34130 Mauguio')
        TrudyLatte.addAdresse(trudyadresse) //add adress trudy

   
     /*
     
      //Afficher les informations des contacts avec jquery
        
        $('body').append(jeanLuc.getAvatar() +' ' +jeanLuc.getNom() +' '+jeanLuc.getPrenom()+jeanLuc.(setEmail())+' '+ '</br>\n '
      +' ' +  TrudyLatte.getAvatar()+' '+TrudyLatte.getNom()+' '+TrudyLatte.getPrenom())
      */  
    }

}

$(function() {
    const app = new Main()
    // Materialize select element handling
const elements = document.querySelectorAll('select')
const instances = M.FormSelect.init(elements,{})

})


