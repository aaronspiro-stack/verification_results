import React from 'react';
import { 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  User, 
  Mail, 
  Smartphone, 
  Linkedin, 
  Globe, 
  FileText, 
  ShieldAlert,
  Server,
  AlertOctagon,
  Clock,
  Database
} from 'lucide-react';
import { createRoot } from 'react-dom/client';

const VerificationReport = () => {
  // Exact data from user text
  const report = {
    summary: {
      level: "Advanced",
      confidence: "Medium Confidence",
      description: "The applicant has no internet presence matching their name and work experience, and their email is less than one month old with no breach history."
    },
    sections: {
      personal: {
        title: "Personal Information",
        name: "Mark Wlodawski",
        status: "warning",
        details: ["Could not find any Mark Wlodawski matching this description"]
      },
      email: {
        title: "Email",
        value: "markw.developer@gmail.com",
        status: "mixed",
        accounts: "Associated with 14 accounts",
        accountList: ["Google", "Github", "Discord", "11 more"],
        signals: [
          { text: "Email is Less than a month old", risk: "high" },
          { text: "Not found in any data breaches", risk: "high" }
        ]
      },
      phone: {
        title: "Phone",
        value: "+1 407-960-9318",
        status: "good",
        type: "Mobile/Landline",
        carrier: "T-Mobile US-SVR-10X/2",
        owner: "Registered to Mark Wlodawski",
        accounts: "Associated with 7 online account(s)",
        accountList: ["Instagram", "Facebook", "Twitter", "Microsoft", "Venmo"]
      },
      social: {
        title: "Social Profiles",
        subtitle: "LinkedIn Email Lookup",
        status: "warning",
        details: ["Tofu did not find a LinkedIn account for markw.developer@gmail.com"]
      },
      network: {
        title: "Tofu Network Analysis",
        subtitle: "IP Analysis",
        status: "critical",
        alert: "This applicant was recently identified in the Tofu network submitting applications from an IP used as a VPN or tunnel exit point",
        signals: [
          { text: "Submitted from a rented server or hosting provider", icon: Server },
          { text: "Submitted via VPN (Oxylabs Proxy) located in United States", icon: ShieldAlert },
          { text: "This IP is used as an exit point for a VPN, proxy, or anonymizing tunnel service", icon: Globe }
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
            "Created on December 29, 2025 • 2:24 PM",
            "Resume created by pdf-lib (https://github.com/Hopding/pdf-lib)"
          ]
        }
      }
    }
  };

  const StatusBadge = ({ type }) => {
    const styles = {
      high: "bg-red-100 text-red-700 border-red-200",
      warning: "bg-amber-100 text-amber-700 border-amber-200",
      good: "bg-emerald-100 text-emerald-700 border-emerald-200",
      neutral: "bg-slate-100 text-slate-600 border-slate-200"
    };
    return (
      <span className={`px-2 py-0.5 rounded text-xs font-semibold border ${styles[type] || styles.neutral}`}>
        {type.toUpperCase()}
      </span>
    );
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
      <div className="max-w-3xl w-full space-y-6">
        
        {/* Header Section */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-4">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-xl font-bold text-slate-900">Verification Results</h1>
                <span className="bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded text-xs font-medium border border-indigo-100">
                  {report.summary.level}
                </span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                 <div className="h-3 w-3 rounded-full bg-amber-500"></div>
                 <span className="font-semibold text-amber-700 text-lg">{report.summary.confidence}</span>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 flex gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-900 leading-relaxed">
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

          {/* Social Profiles */}
          <SectionCard icon={Linkedin} title={report.sections.social.title}>
            <div className="mb-2">
               <span className="text-xs font-medium text-slate-400 uppercase">{report.sections.social.subtitle}</span>
               <div className="text-sm font-medium text-slate-900 mt-1">{report.sections.email.value}</div>
            </div>
            <div className="flex items-start gap-2 bg-amber-50 p-3 rounded-md border border-amber-100">
               <AlertOctagon className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
               <span className="text-sm text-amber-700">{report.sections.social.details[0]}</span>
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

          {/* Phone Analysis */}
          <SectionCard icon={Smartphone} title={report.sections.phone.title}>
            <div className="mb-4">
               <div className="text-sm font-medium text-slate-900">{report.sections.phone.value}</div>
               <div className="text-xs text-slate-500 mt-1">{report.sections.phone.type} • {report.sections.phone.carrier}</div>
             </div>

             <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm text-slate-700">{report.sections.phone.owner}</span>
                </div>
                
                <div className="bg-slate-50 p-3 rounded border border-slate-100">
                  <div className="text-sm text-slate-700 mb-2">{report.sections.phone.accounts}</div>
                  <div className="flex flex-wrap gap-1">
                      {report.sections.phone.accountList.map((acc, i) => (
                        <span key={i} className="px-2 py-0.5 bg-white text-slate-600 text-xs rounded border border-slate-200 shadow-sm">{acc}</span>
                      ))}
                    </div>
                </div>
             </div>
          </SectionCard>

        </div>

        {/* Network Analysis (Full Width) */}
        <SectionCard icon={Globe} title={report.sections.network.title} className="border-red-200">
           <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-bold bg-red-100 text-red-700 px-2 py-1 rounded uppercase tracking-wider">High Risk Detected</span>
              <span className="text-sm text-slate-500">{report.sections.network.subtitle}</span>
           </div>
           
           <div className="bg-red-50 border border-red-100 rounded-lg p-4 mb-4">
              <div className="flex gap-3">
                <ShieldAlert className="w-5 h-5 text-red-600 flex-shrink-0" />
                <p className="text-sm font-medium text-red-800">{report.sections.network.alert}</p>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             {report.sections.network.signals.map((sig, i) => (
               <div key={i} className="flex flex-col gap-2 p-3 bg-slate-50 rounded border border-slate-100">
                  <sig.icon className="w-4 h-4 text-slate-500" />
                  <span className="text-xs text-slate-600 leading-snug">{sig.text}</span>
               </div>
             ))}
           </div>
        </SectionCard>

        {/* Resume Analysis (Full Width) */}
        <SectionCard icon={FileText} title={report.sections.resume.title}>
           <div className="flex flex-col md:flex-row gap-6">
             
             {/* AI Detection Box */}
             <div className="flex-1 bg-slate-900 rounded-lg p-5 text-center flex flex-col items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10" />
                <div className="relative z-10">
                   <div className="text-xs text-slate-400 uppercase tracking-widest mb-2">{report.sections.resume.aiDetection.label}</div>
                   <div className="text-xl font-bold text-white mb-1">{report.sections.resume.aiDetection.value}</div>
                   <div className="inline-block mt-2 px-2 py-0.5 rounded bg-red-500/20 text-red-300 text-xs border border-red-500/30">100% Probability</div>
                </div>
             </div>

             {/* Metadata */}
             <div className="flex-1 space-y-4">
                <h4 className="text-sm font-medium text-slate-900 flex items-center gap-2">
                  <Database className="w-4 h-4 text-slate-400" />
                  {report.sections.resume.metadata.label}
                </h4>
                <div className="space-y-3 pl-2 border-l-2 border-slate-100">
                  {report.sections.resume.metadata.items.map((item, i) => (
                    <div key={i} className="text-sm text-slate-600">
                      {item}
                    </div>
                  ))}
                </div>
             </div>

           </div>
        </SectionCard>
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<VerificationReport />);

export default VerificationReport;