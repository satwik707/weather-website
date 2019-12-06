//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const request=require('request')

const forcast=(latitude,longitude,callback)=>
{
    const url = 'https://api.darksky.net/forecast/29988740a9644defcb45cb3af512db31/'+latitude+','+longitude+'?units=si'
    request({url:url,rejectUnauthorized:false,json:true},(error,response)=>
    {
        if(error)
        {
            callback(error,undefined)
        }
        else if(response.body.error)
        {
            callback(error,undefined)
        }
        else 
        {
            const data=response.body
            callback(undefined,{
                
                forecastdata:data.daily.data[0].summary+' '+'it is '+data.currently.temperature+' outside.'+' There is '+data.currently.precipProbability +' chances of rain.\nThe wind speed is '+data.currently.windSpeed+'. The visibility is  '+data.currently.visibility+'.The highest recorded temperature is '+data.daily.data[0].temperatureHigh+'.The lowest recorded temperature is '+data.daily.data[0].temperatureLow+'.'

            })
        }
    })

}
module.exports=forcast