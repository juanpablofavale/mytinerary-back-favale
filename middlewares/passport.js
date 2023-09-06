import passport from "passport"
import {Strategy, ExtractJwt} from "passport-jwt"

export default passport.use(
    new Strategy({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.SECRETKEY
    },
    (payload, next) => {
        return next(null, payload)
    })
)