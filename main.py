from fastapi import FastAPI
from routes import users, courses

app = FastAPI(title="Dark OSINT LMS", description="OSINT Learning Platform")

app.include_router(users.router, prefix="/users", tags=["Users"])
app.include_router(courses.router, prefix="/courses", tags=["Courses"])

@app.get("/")
def root():
    return {"message": "Welcome to Dark OSINT LMS. Resources: https://literatiacendekia.com/, https://darkosint.blogspot.com/"}
