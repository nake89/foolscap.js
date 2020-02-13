import {APIGatewayEvent, Context, Handler, Callback} from "aws-lambda"
import BaseResponse from "./responses/BaseResponse"

export const submitItem: Handler = async (event: APIGatewayEvent) => {
  if (event.body != null) {
    try {
      JSON.parse(event.body)
    } catch (e) {
      return new BaseResponse(500, 0, "JSON invalid").response()
    }
    const {username, email, password} = JSON.parse(event.body)
  }
}
