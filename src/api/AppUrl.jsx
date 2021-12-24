class AppUrl{
    static BaseUrl = "http://localhost:8000/api"
    static storeDetails = this.BaseUrl+"/store-details"
    static showDetails = this.BaseUrl+"/show-details"
    static showData = this.BaseUrl+"/show-data"
    static details(id){
        return this.BaseUrl+"/datadetails/"+id;
    }

}
export default AppUrl