const request=require('request')

const geocode=(location,callback)=>{
    const url2='https://api.mapbox.com/geocoding/v5/mapbox.places/'+location+'.json?access_token=pk.eyJ1Ijoic2F0d2lrNzA3IiwiYSI6ImNrMWhuMnpmcTA0YWMzZ29mZjF0b3pzdzMifQ.rgJ5u-LXsABKgtpafgFPyw'
    request({url:url2,rejectUnauthorized:false,json:true} ,(error,response)=>
    {
        if(error)
        {
            callback(error,undefined)
        }
        else if(response.body.features.length===0)
        {
            callback('no location found',undefined)
        }
        else{
            callback(undefined,{
                latitude:response.body.features[0].center[1],
                longitude:response.body.features[0].center[0],
                place:response.body.features[0].place_name
            })
        }
    })  

}


    
module.exports=geocode

