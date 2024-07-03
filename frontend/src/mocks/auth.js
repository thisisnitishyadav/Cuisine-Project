import axios from "axios";


class AuthApi{
    async signup(data){
        try {
            const res = await axios.post(`http://localhost:5001/auth/signup`, data);
            
            if (res) {
                return res;
            } else {
                alert('no');
                return false;
            }
        } catch (error) {
            alert(error);
        }
    }


    async login(data){
        try {
             const res = await axios.post(`http://localhost:5001/auth/signin`, data);
            if(res){
                return res.data
            }else{
                alert('n1');
                return false
            }
        } catch (error) {
          alert(error);
        }
    }

    
    async getUser(){

    try {
        const res = await axios.get(`${process.env.REACT_APP_CLIENT_URL}/user/me`,{
            method:'get',
            headers:{
                "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
            }
            
        })

        if(res?.data?.status === "SUCCESS"){
            return res.data
        }else{
            return false
        }
    } catch (error) {
      console.log(error);  
    }
   }

    async updateUser(data,id){
     const response = await axios.put(`${process.env.REACT_APP_CLIENT_URL}/user/update/${id}`,data,{
      method: "put",
      headers: { 
      "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
      }
    });
      if(response.data.status==='SUCCESS')
      return response.data;
      else
       return false;
  } 

    async deleteUser(id){
      const response = await axios.delete(`${process.env.REACT_APP_CLIENT_URL}/user/delete/${id}`,{
      method: "delete",
      headers: { 
      "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
      }
    });
      if(response.data.status==='SUCCESS')
      return response.data;
      else
       return false;
    } 

  }


export const authApi = new AuthApi();