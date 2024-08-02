import { CelebrateError } from "celebrate";

const erro = (err, req, res, next) => {
    if(err instanceof CelebrateError) {
      const errorBody = err.details.get('body')
      return res.status(400).json({
        message: errorBody?.message
      })
    }
  
    return res.status(500).json({
      status: 'error',
      message: `Internal server error - ${err.message}`
    })
  }

  export default erro;