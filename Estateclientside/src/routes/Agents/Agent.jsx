// AgentPage.js
import React from 'react';
import './Agent.scss'; // Optional: use for styling the component

// Sample data for agents
const agents = [
  {
    id: 1,
    name: 'Jane Doe',
    photo: 'https://via.placeholder.com/150', // Placeholder image; replace with actual image URLs
    bio: 'With over 10 years of experience, Jane specializes in luxury residential properties and ensures the best service for her clients.',
    phone: '(123) 456-7890',
    email: 'jane.doe@example.com'
  },
  {
    id: 2,
    name: 'John Smith',
    photo: 'https://via.placeholder.com/150',
    bio: 'John has a passion for helping clients find the perfect commercial properties to meet their needs.',
    phone: '(987) 654-3210',
    email: 'john.smith@example.com'
  },
  {
    id: 3,
    name: 'Sarah Lee',
    photo: 'https://via.placeholder.com/150',
    bio: 'Sarah is an expert in property management with a focus on client satisfaction and efficient property management.',
    phone: '(555) 123-4567',
    email: 'sarah.lee@example.com'
  }
];

const AgentPage = () => {
  return (
    <div className="agent-page">

      <div className='content'>content</div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
      {/* <h1>Meet Our Agents</h1>
      <p>Our team of experienced agents is here to provide you with exceptional service, local knowledge, and expert guidance. Whether you're a landlord, investor, or tenant, our agents are ready to assist you with all your real estate needs.</p>
      
      <div className="agent-list">
        {agents.map((agent) => (
          <div key={agent.id} className="agent-card">
            <img src={agent.photo} alt={`${agent.name}`} className="agent-photo" />
            <h2>{agent.name}</h2>
            <p>{agent.bio}</p>
            <p><strong>Phone:</strong> {agent.phone}</p>
            <p><strong>Email:</strong> <a href={`mailto:${agent.email}`}>{agent.email}</a></p>
            <button onClick={() => window.location.href = `mailto:${agent.email}`}>Contact {agent.name}</button>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default AgentPage;
