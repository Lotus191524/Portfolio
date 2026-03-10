const SkillCard = ({ title, skills, colorClass, iconPath }) => (
  <div className={`glass-card p-10 rounded-3xl text-left border-${colorClass}-500/10`}>
    <div className={`w-12 h-12 bg-${colorClass}-500/20 rounded-2xl flex items-center justify-center mb-6`}>
      <svg className={`w-6 h-6 text-${colorClass}-400`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={iconPath} />
      </svg>
    </div>
    <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
    <ul className="space-y-3 text-slate-400 text-sm">
      {skills.map(skill => (
        <li key={skill} className="flex items-center">
          <span className={`w-1.5 h-1.5 rounded-full bg-${colorClass}-500 mr-2`}></span> {skill}
        </li>
      ))}
    </ul>
  </div>
);
          
