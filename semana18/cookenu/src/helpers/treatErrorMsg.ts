export const treatErrorMessage = (error:any) => {
    if(error.message === `Cannot read property 'id' of undefined`){
        error.message = 'ID parameter must be provided.'
    }
    if(error.message === `jwt malformed`){
        error.message = 'Invalid token.'
    }
    if(error.message === `jwt must be provided`){
        error.message = 'Unauthorized.'
    }

    return error.message
}