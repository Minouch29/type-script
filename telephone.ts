/**
 * @name Telephone
 * @abstract generalistaion of all phone number
 */

 export class Telephone{
     /**
      * @var string
      * 
      */
     protected phoneNumber:string
     public setPhoneNumber(phoneNumber:string): Telephone{
         //@todo (à faire)check to phoneNumber length and pattern = dette technique
         this.phoneNumber=phoneNumber
         return this 
     }

     public getPhoneNumber():string{
         return this.phoneNumber
     }

 }