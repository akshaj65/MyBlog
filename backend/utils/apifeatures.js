class ApiFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }
    // for searching in the title
    search(){
        const Keyword= this.queryStr.category ? {
            //thing u want to search
            category:{
                $regex:this.queryStr.category,
                $options:"i",//case insensitive
            },
        }:{}
        // console.log(Keyword)

        this.query=this.query.find({...Keyword});
        // console.log(this.queryStr)
        return this;
    }
    // filter() {
    //     let str=this.queryStr.category
    //     let regex= new RegExp(`^${str}$`,"i")
    //     const Keyword = this.queryStr.category ? {
    //         //thing u want to search
    //         category: {
    //             // $eq: this.queryStr.category,
    //             $regex:regex
               
    //         },
    //     } : {}
    //     console.log(Keyword)

    //     this.query = this.query.find({ ...Keyword });
    //     return this;

    // }
    // filter(){
    //     // const queryCopy= this.queryStr  we cant assign as this  is a referrence so it will affect other elements also
    //     const queryCopy={...queryStr}//but by using spread operator we get actual copy

    //     //replacing some fields for category
    //     const removeFields=["keywords","page"]
    //     removeFields.forEach(key => delete queryCopy[key]);
    //     this.query=this.query.find(queryCopy);
    //     return this; 

    // }

    pagination(resultPerPage) {
        const currentPage = Number(this.queryStr.page) || 1;
        const skip = resultPerPage * (currentPage - 1);

        this.query = this.query.limit(resultPerPage).skip(skip);
        return this;
    }
}

module.exports = ApiFeatures;