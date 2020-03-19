import http from '../http'

const getOccupations = async () => {
    try {
      const res = await http.get('/occupations')
      return res.data
    } catch (error) {
      throw Error(error)
    }
  }


  
export {
    getOccupations
}