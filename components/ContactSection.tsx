
'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: 'ri-mail-line',
      title: 'Email',
      content: 'hello@portfolio.com',
      link: 'mailto:hello@portfolio.com'
    },
    {
      icon: 'ri-phone-line',
      title: 'Phone',
      content: '+82 10-1234-5678',
      link: 'tel:+821012345678'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Location',
      content: 'Seoul, South Korea',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: 'ri-linkedin-box-fill', link: '#', name: 'LinkedIn' },
    { icon: 'ri-github-fill', link: '#', name: 'GitHub' },
    { icon: 'ri-dribbble-fill', link: '#', name: 'Dribbble' },
    { icon: 'ri-behance-fill', link: '#', name: 'Behance' },
    { icon: 'ri-instagram-fill', link: '#', name: 'Instagram' }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              새로운 프로젝트나 협업 기회에 대해 이야기해보세요
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">연락처 정보</h3>
              
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                      <i className={`${info.icon} text-xl text-white`}></i>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{info.title}</p>
                      <p className="text-lg font-medium">{info.content}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div>
                <h4 className="text-lg font-bold text-white mb-6">소셜 미디어</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer"
                      title={social.name}
                    >
                      <i className={`${social.icon} text-xl text-gray-300 hover:text-white`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-8">메시지 보내기</h3>
              
              {isSubmitted && (
                <div className="bg-green-600 text-white p-4 rounded-lg mb-6">
                  메시지가 성공적으로 전송되었습니다. 빠른 시일 내에 답변드리겠습니다!
                </div>
              )}

              <form onSubmit={handleSubmit} id="contact-form" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="이름"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="이메일"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                    />
                  </div>
                </div>
                
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="제목"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                  />
                </div>
                
                <div>
                  <textarea
                    name="message"
                    placeholder="메시지를 입력해주세요"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    maxLength={500}
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none text-sm"
                  ></textarea>
                  <p className="text-gray-400 text-sm mt-2">{formData.message.length}/500</p>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium cursor-pointer whitespace-nowrap"
                >
                  메시지 보내기
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
