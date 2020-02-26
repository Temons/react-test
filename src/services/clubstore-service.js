export default class ClubstoreService {
    getClubs() {
      return (
        fetch('http://138.201.126.75:64554/api/Trainings/GetTrainings?startDate=07/22/2019&endDate=07/28/2019')
          .then(response => response.json())
      )
      
    }
  }