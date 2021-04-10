-- set up a database and name it "s3_gallery"

-- execute this query to create the "gallery" table
CREATE TABLE "gallery" (
	"id" SERIAL PRIMARY KEY,
	"image_path" VARCHAR (300) 
);