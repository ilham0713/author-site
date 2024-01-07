import React from 'react'
import "./team.css"
import auth from "../../assets/autho.jpeg";
import ill from "../../assets/illust.jpg";

export default function Team() {
    return (
       <div className='Team-t'>
        <h2 className='about-header'>Meet the Team</h2>
        <div className='box'>
            <div>
                <img className = "picture" src={auth} alt="The Quinceanera Party" />
            </div>
            <div className="text-content">
                <h3 className='name'>Janeth Bell: Author</h3>
                <p className='intro first'>
                    Janeth Bell has been around young people all her life. She grew up on the island of Jamaica until age eighteen. Her mother was a nurse at the Children's Hospital and she had the opportunity to work there one summer as a young teen. This experience gave her a deep understanding of caring for the sick and disabled. In her books, you'll find characters who share the same feelings of compassion for others.
    
    Her first trip abroad was at the middle-school age of eleven when her family visited England, France and Spain. She learned the difficulties and the emotional challenges of being in a new place.  She had to navigate conversations in different languages for simple tasks like selecting food, making a purchase or making a friend.  She learned the value of laughter and humor, which you will find in her travel adventure stories.
    
    After high school she traveled to Mexico where she lived for six years. Eventually, she moved to New York City where she became a teacher of Spanish and English as a Second Language to high school students and adults. In New York City she taught students who represented many cultures, mostly from Latin America. 
    
    In the series you will travel with Miranda, a middle-schooler who speaks limited Spanish.  She is happy to explore parts of Latin America and make new friends. Stay with her as she takes you through the beauty of these countries where cultures collided centuries ago to create a new and authentic one. School-age readers will enjoy the mystery, adventure, laughter and suspense associated with this series. Each book has a central theme based on understanding and kindness.
    
    Inspired by her early experiences, Janeth is also committed to community service and helping others.
                </p>

            </div>
            
            
        </div>

        <div className='box'>
            <div>
                <img className = "picture" src={ill} alt="The Quinceanera Party" />
                
            </div>
            <div className="text-content">
                <h3 className='name'>Olivia Wynter: Illustrator</h3>
                <p className='intro'>
                    Olivia Wynter has been using drawing as a hobby since she was a young girl. Her hobby has proven to be the real creative magic that appears in Books 1 and 2 of the Miranda’s Travel Adventures series.

    She is the talented artist behind the illustrations at the start of each chapter. In each book she uses her creative genius to summarize a crucial part of the chapter. That is her unique way of giving the reader a visual idea of what is to come. There are ten unique illustrations that prove she is a storyteller as well as an artist. Olivia offers sneak peeks into the physical and cultural aspects of the country Miranda is visiting.
    
    Olivia lives with her family in Ontario, Canada. She shares her Canadian, Portuguese and Guyanese heritage with her friends and relatives and creates magic with her pencil drawings. She is an avid dog lover and soccer fan. She believes that there is a creative genius in every child.  

                </p>
            </div>
            
            
        </div>
        
       </div>
    )
}