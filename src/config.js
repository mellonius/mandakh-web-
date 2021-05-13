const fbapi =
  "https://graph.facebook.com/v9.0/mandakhuniversitySIT/feed?fields=id,attachments,created_time,message,reactions{type}&limit=4";
const fbtoken = {
  headers: {
    Authorization: `Bearer EAACHZBIqZAOroBANVu7XBzCSnZBxSvUFTNErIohbZCVvlkmZBDHnz0r7yEludHhsvgt5MIoje0bxDZC0x2eZA292mTqYVBJJlOZAtCeZAZBNvP1eOcQc9s7wp9O37p9jpDy1LOHagGxgLQxfcsejLw9kxBQNonP1kej0j9L5Sd7cEXnAZDZD`,
  },
};
export { fbapi, fbtoken };
//faceboook page graph api get access token expire to never expire
//link
//https://www.sociablekit.com/app/convert_token_to_never_expire.php
