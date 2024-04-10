import tournamentServices from "../services/tournament.services.js";
import { validationResult, check } from "express-validator";



 const validateTournament = [
      check("name").notEmpty().withMessage("Tournament name is required"),
      check("ownerId").notEmpty().withMessage("Owner ID is required"),
      check("timeStart")
        .isDate()
        .withMessage("Start time must be a valid date"),
      check("timeEnd").isDate().withMessage("End time must be a valid date"),
      check("timeEnd")
        .isAfter(check("timeStart"))
        .withMessage("End time must be after start time"), // Ensure end time is after start time
    ];

const tournamentService = new tournamentServices();

export default class tournamentControllers {
  //
  async getAlls(req, res) {
    return await tournamentService.getAlls(req, res);
  }
  //
  async createTournament(req, res) {
   
    // Validate input data
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() }); // Return bad request with error details
    }


    try {
      // Call service to save tournament 
      const createdTournament = await tournamentService.createTournament(
        req,
        res
      );

    } catch (error) {
      console.error("Error creating tournament:", error);
      res.status(500).json({ message: "Error creating tournament" }); // Return internal server error
    }
  }

  //
  async deleteTournament(req, res) {
    try {
        if(req.params.id)
        {
            
        }
    } catch (error) {
        
    }
  }

  //
  async findTournament() {}
  //
  async updateTournament() {}
}
