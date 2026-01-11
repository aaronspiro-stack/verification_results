import React from 'react';
import { 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  User, 
  Mail, 
  Linkedin, 
  FileText, 
  ShieldAlert,
  AlertOctagon,
  Database,
  Briefcase,
  MapPin,
  Calendar
} from 'lucide-react';
import { createRoot } from 'react-dom/client';

const VerificationReport = () => {
  // Updated data for Andres Martinez Garcia
  const report = {
    header: {
      role: "Senior Rust Engineer @ Accenture",
      location: "Katowice, Silesian Voivodeship",
      date: "Applied on 1/10/2026"
    },
    summary: {
      level: "Suspicious",
      score: "43%", 
      description: "The applicant's LinkedIn is only 5 months old despite work starting in 2017, there is no online history for the applicant, and the applicant's email is only 4 months old and not found in breaches."
    },
    sections: {
      personal: {
        title: "Personal Information",
        name: "Andres Martinez Garcia",
        status: "warning",
        details: ["Could not find any Andres Martinez Garcia matching this description"]
      },
      email: {
        title: "Email",
        value: "andresmartinezgarcia20@gmail.com",
        status: "mixed",
        accounts: "Associated with 3 accounts",
        accountList: ["Google", "Medium", "Linkedin"],
        signals: [
          { text: "Email is 4 months old", risk: "high" },
          { text: "Not found in any data breaches", risk: "high" }
        ]
      },
      social: {
        title: "Social Profiles",
        subtitle: "LinkedIn",
        link: "https://www.linkedin.com/in/andres-martinez-garcia-99aa4437b",
        status: "warning",
        stats: [
          { label: "Connections", value: "68" },
          { label: "Followers", value: "68" }
        ],
        signals: [
          { text: "Account created 5 months ago", risk: "high" },
          { text: "Applicant started working on October 01, 2017, LinkedIn was created on August 01, 2025", risk: "high" },
          { text: "Contact updated 6 months ago", risk: "neutral" },
          { text: "Not verified", risk: "warning" },
          { text: "Posting for 2 months", risk: "neutral" }
        ]
      },
      resume: {
        title: "Resume Analysis",
        aiDetection: {
          label: "AI Detection",
          value: "Entirely written by AI",
          risk: "high"
        },
        metadata: {
          label: "Metadata",
          items: [
            "Created on October 30, 2025 • 1:14 PM",
            "Resume created by Apache FOP Version 2.2"
          ]
        }
      }
    }
  };

  const SectionCard = ({ icon: Icon, title, children, className = "" }) => (
    <div className={`bg-white rounded-lg border border-slate-200 overflow-hidden ${className}`}>
      <div className="bg-slate-50 px-4 py-3 border-b border-slate-100 flex items-center gap-2">
        <Icon className="w-4 h-4 text-slate-500" />
        <h3 className="font-semibold text-slate-800 text-sm uppercase tracking-wide">{title}</h3>
      </div>
      <div className="p-5">
        {children}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F3F4F6] p-6 font-sans text-slate-800 flex justify-center">
      <div className="max-w-4xl w-full space-y-6">
        
        {/* Header Section */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-xl font-bold text-slate-900">Verification Results</h1>
                <span className="bg-red-50 text-red-700 px-2 py-0.5 rounded text-xs font-bold border border-red-100 uppercase tracking-wide">
                  {report.summary.level}
                </span>
              </div>
              
              {/* Job Info Header */}
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 mb-4">
                <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" /> {report.header.role}</span>
                <span className="hidden md:inline text-slate-300">|</span>
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {report.header.location}</span>
                <span className="hidden md:inline text-slate-300">|</span>
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {report.header.date}</span>
              </div>

              <div className="flex items-center gap-3">
                 <div className="relative h-12 w-12 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <path className="text-slate-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                      <path className="text-red-500" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="43, 100" />
                    </svg>
                    <span className="absolute text-xs font-bold text-slate-700">{report.summary.score}</span>
                 </div>
                 <div className="flex flex-col">
                    <span className="text-sm font-semibold text-slate-900">Match Confidence</span>
                    <span className="text-xs text-slate-500">Based on available signals</span>
                 </div>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border border-red-100 rounded-lg p-4 flex gap-3">
            <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-900 leading-relaxed font-medium">
              {report.summary.description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Personal Info */}
          <SectionCard icon={User} title={report.sections.personal.title}>
            <div className="mb-3">
              <span className="text-lg font-semibold text-slate-900 block">{report.sections.personal.name}</span>
            </div>
            <div className="flex items-start gap-2 bg-red-50 p-3 rounded-md border border-red-100">
              <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-red-700">{report.sections.personal.details[0]}</span>
            </div>
          </SectionCard>

          {/* Social Profiles - Enhanced for Andres' Data */}
          <SectionCard icon={Linkedin} title={report.sections.social.title}>
            <div className="mb-3">
               <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs font-medium text-slate-400 uppercase">{report.sections.social.subtitle}</span>
                    <a href="#" className="text-sm font-medium text-blue-600 hover:underline mt-1 block truncate max-w-[200px]">
                        {report.sections.social.link}
                    </a>
                  </div>
                  <div className="flex gap-2">
                    {report.sections.social.stats.map((stat, i) => (
                        <div key={i} className="text-center px-2 py-1 bg-slate-50 rounded border border-slate-100">
                            <div className="text-xs font-bold text-slate-700">{stat.value}</div>
                            <div className="text-[10px] text-slate-400 uppercase">{stat.label}</div>
                        </div>
                    ))}
                  </div>
               </div>
            </div>

            <div className="space-y-2">
               {report.sections.social.signals.map((sig, i) => (
                   <div key={i} className={`flex items-start gap-2 p-2 rounded ${sig.risk === 'high' ? 'bg-red-50/50' : ''}`}>
                       {sig.risk === 'high' ? (
                           <AlertOctagon className="w-3.5 h-3.5 text-red-500 mt-0.5 flex-shrink-0" />
                       ) : sig.risk === 'warning' ? (
                           <AlertTriangle className="w-3.5 h-3.5 text-amber-500 mt-0.5 flex-shrink-0" />
                       ) : (
                           <div className="w-3.5 h-3.5 rounded-full border-2 border-slate-300 mt-0.5 flex-shrink-0" />
                       )}
                       <span className={`text-sm ${sig.risk === 'high' ? 'text-red-700 font-medium' : 'text-slate-600'}`}>
                           {sig.text}
                       </span>
                   </div>
               ))}
            </div>
          </SectionCard>

          {/* Email Analysis */}
          <SectionCard icon={Mail} title={report.sections.email.title}>
             <div className="mb-4">
               <div className="text-sm font-medium text-slate-900">{report.sections.email.value}</div>
             </div>
             
             <div className="space-y-3">
               <div className="flex items-start gap-3">
                 <div className="w-1 h-full bg-slate-200 rounded-full" />
                 <div>
                    <div className="text-sm font-medium text-slate-700">{report.sections.email.accounts}</div>
                    <div className="flex flex-wrap gap-1 mt-1.5">
                      {report.sections.email.accountList.map((acc, i) => (
                        <span key={i} className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded border border-slate-200">{acc}</span>
                      ))}
                    </div>
                 </div>
               </div>
               
               {report.sections.email.signals.map((sig, i) => (
                 <div key={i} className="flex items-start gap-2">
                    {sig.risk === 'high' ? (
                      <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5" />
                    ) : (
                      <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5" />
                    )}
                    <span className={`text-sm ${sig.risk === 'high' ? 'text-red-600 font-medium' : 'text-slate-600'}`}>
                      {sig.text}
                    </span>
                 </div>
               ))}
             </div>
          </SectionCard>

          {/* Resume Analysis */}
          <SectionCard icon={FileText} title={report.sections.resume.title}>
             <div className="flex flex-col gap-4">
               
               {/* AI Detection Box */}
               <div className="bg-slate-900 rounded-lg p-4 text-center flex flex-col items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20" />
                  <div className="relative z-10">
                     <div className="text-xs text-slate-400 uppercase tracking-widest mb-1">{report.sections.resume.aiDetection.label}</div>
                     <div className="text-lg font-bold text-white mb-1">{report.sections.resume.aiDetection.value}</div>
                     <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-red-500/20 text-red-300 text-[10px] font-bold border border-red-500/30 uppercase tracking-wider">
                        <ShieldAlert className="w-3 h-3" /> High Probability
                     </div>
                  </div>
               </div>
  
               {/* Metadata */}
               <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                    <Database className="w-3 h-3" />
                    {report.sections.resume.metadata.label}
                  </h4>
                  <div className="bg-slate-50 rounded border border-slate-100 p-3 space-y-2">
                    {report.sections.resume.metadata.items.map((item, i) => (
                      <div key={i} className="text-sm text-slate-600 flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5" />
                        {item}
                      </div>
                    ))}
                  </div>
               </div>
  
             </div>
          </SectionCard>

        </div>
      </div>
    </div>
  );
};

// Mount the app
const root = createRoot(document.getElementById('root'));
root.render(<VerificationReport />);

export default VerificationReport;
