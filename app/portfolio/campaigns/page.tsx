
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TrendingUp, Target, DollarSign, Users, BarChart3 } from "lucide-react"

const Campaigns = () => {
  const campaigns = [
    {
      id: 1,
      title: "Summer Sale Campaign 2024",
      client: "FashionHub Retail",
      platform: "Multi-Channel",
      duration: "3 months",
      budget: "$50,000",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&h=600&fit=crop",
      metrics: {
        impressions: "2.5M+",
        clicks: "125K+",
        conversions: "8,500+",
        roi: "450%"
      },
      channels: ["Google Ads", "Facebook", "Instagram", "Email"]
    },
    {
      id: 2,
      title: "Lead Generation Campaign",
      client: "B2B SaaS Company",
      platform: "LinkedIn & Google",
      duration: "6 months",
      budget: "$75,000",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      metrics: {
        impressions: "1.8M+",
        clicks: "95K+",
        conversions: "2,500+",
        roi: "380%"
      },
      channels: ["LinkedIn Ads", "Google Ads", "Content Marketing"]
    },
    {
      id: 3,
      title: "Brand Awareness Campaign",
      client: "EcoProducts Inc",
      platform: "Social Media",
      duration: "4 months",
      budget: "$40,000",
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&h=600&fit=crop",
      metrics: {
        impressions: "5M+",
        clicks: "200K+",
        conversions: "15K+",
        roi: "520%"
      },
      channels: ["Instagram", "TikTok", "YouTube", "Twitter"]
    }
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
        <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .delay-100 {
          animation-delay: 0.1s;
          opacity: 0;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }
      `}</style>
      
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-4">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-semibold">Campaign Results</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              Digital <span className="text-blue-600">Campaign Results</span>
            </h1>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Data-driven campaigns that deliver measurable results and exceptional ROI
            </p>
          </div>

          {/* Campaigns */}
          <div className="space-y-8">
            {campaigns.map((campaign, index) => (
              <div
                key={campaign.id}
                className={`bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 animate-fade-in-up delay-${index * 100}`}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Image */}
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img 
                      src={campaign.image} 
                      alt={campaign.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-transparent flex items-center p-8">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{campaign.title}</h3>
                        <p className="text-white/90 font-semibold">{campaign.client}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <p className="text-sm text-slate-500 mb-1">Platform</p>
                        <p className="font-semibold text-slate-900">{campaign.platform}</p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 mb-1">Duration</p>
                        <p className="font-semibold text-slate-900">{campaign.duration}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-sm text-slate-500 mb-1">Budget</p>
                        <p className="font-semibold text-blue-600">{campaign.budget}</p>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="bg-slate-50 rounded-xl p-6 mb-6">
                      <h4 className="text-sm font-bold text-slate-500 uppercase mb-4 flex items-center gap-2">
                        <BarChart3 className="w-4 h-4" />
                        Campaign Metrics
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white p-3 rounded-lg">
                          <div className="flex items-center gap-2 mb-1">
                            <Users className="w-4 h-4 text-purple-600" />
                            <p className="text-xs text-slate-500">Impressions</p>
                          </div>
                          <p className="text-xl font-bold text-purple-600">{campaign.metrics.impressions}</p>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                          <div className="flex items-center gap-2 mb-1">
                            <Target className="w-4 h-4 text-blue-600" />
                            <p className="text-xs text-slate-500">Clicks</p>
                          </div>
                          <p className="text-xl font-bold text-blue-600">{campaign.metrics.clicks}</p>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                          <div className="flex items-center gap-2 mb-1">
                            <TrendingUp className="w-4 h-4 text-orange-600" />
                            <p className="text-xs text-slate-500">Conversions</p>
                          </div>
                          <p className="text-xl font-bold text-orange-600">{campaign.metrics.conversions}</p>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                          <div className="flex items-center gap-2 mb-1">
                            <DollarSign className="w-4 h-4 text-green-600" />
                            <p className="text-xs text-slate-500">ROI</p>
                          </div>
                          <p className="text-xl font-bold text-green-600">{campaign.metrics.roi}</p>
                        </div>
                      </div>
                    </div>

                    {/* Channels */}
                    <div>
                      <p className="text-sm font-bold text-slate-500 uppercase mb-3">Channels Used</p>
                      <div className="flex flex-wrap gap-2">
                        {campaign.channels.map((channel, idx) => (
                          <span 
                            key={idx}
                            className="text-xs bg-blue-50 text-blue-600 font-semibold px-3 py-1.5 rounded-full"
                          >
                            {channel}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  )
}

export default Campaigns