/**
 * @name Adresse
 * @author ADRAR
 * @version 1.0.0
 * @abstract Modèle pour les adresses postales
 */
export class Adresse {
    getAdressePostale(): string | ((this: HTMLElement, index: number, oldhtml: string) => string) {
        return this.adressePostale.toString()
    }
    /**
     * @var String Adresse postale
     */
    protected adressePostale: String

    /**
     * @param String adressePostale - Adresse complète
     * @return Adresse
     */
    
    public setAdressePostale(adressePostale: String): Adresse {
        this.adressePostale = adressePostale
        return this
    }
    
}
    
