module Example exposing (User)


type alias User =
    { id : String
    , name : String
    }


{-| Best user, hands down.
-}
rafal : User
rafal =
    User "1337" "Rafał"


lafar : User
lafar =
    User "7331" "Lafar"


sanitize : String -> Maybe Int
sanitize input =
    -- TODO: Add debug log.
    input |> String.trim |> String.toInt



-- TODO: Add sanitizeId.
