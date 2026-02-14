from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from models import Course, Lesson
from database import get_db

router = APIRouter()

@router.get("/")
def get_courses(db: Session = Depends(get_db)):
    return db.query(Course).all()

@router.post("/")
def create_course(title: str, description: str, instructor_id: int, db: Session = Depends(get_db)):
    course = Course(title=title, description=description, instructor_id=instructor_id)
    db.add(course)
    db.commit()
    return course

@router.get("/{course_id}/lessons")
def get_lessons(course_id: int, db: Session = Depends(get_db)):
    return db.query(Lesson).filter(Lesson.course_id == course_id).all()
