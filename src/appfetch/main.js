import axios from 'axios'

const headers={
  "accept": "application/json",
  "Content-Type" : "application/json" ,
}
export const client = axios.create({ baseURL: 'https://localhost:9500'})

export const request = ({ ...options }) => {
  client.defaults.headers.common.Authorization = `Bearer token`

  const onSuccess = response => response
  const onError = error => {
    // optionaly catch errors and add additional logging here
    return error
  }

  return client(options).then(onSuccess).catch(onError)
}

// axios({
//   method: 'DELETE',
//   url: '/hr/addrops/'+'{{uid}}',
//   headers: {
//       'Content-Type': 'application/json'
//     },
//   data: formdata
//   }).then(function (response) {
      
         
//           if (response.status == 202 ){
//               deleteNode()
             
//           }
      
//     }).catch(function (error) {
//       console.log(error);
//     });



// })
