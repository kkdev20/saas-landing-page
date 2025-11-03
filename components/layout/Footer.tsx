'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  const t = useTranslations('footer');

  const footerLinks = {
    product: [
      { key: 'features', href: '#features' },
      { key: 'pricing', href: '#pricing' },
      { key: 'integrations', href: '#integrations' },
      { key: 'security', href: '#security' },
      { key: 'roadmap', href: '#roadmap' },
    ],
    company: [
      { key: 'about', href: '#about' },
      { key: 'careers', href: '#careers' },
      { key: 'blog', href: '#blog' },
      { key: 'press', href: '#press' },
      { key: 'contact', href: '#contact' },
    ],
    resources: [
      { key: 'help', href: '#help' },
      { key: 'docs', href: '#docs' },
      { key: 'api', href: '#api' },
      { key: 'community', href: '#community' },
      { key: 'status', href: '#status' },
    ],
    legal: [
      { key: 'privacy', href: '#privacy' },
      { key: 'terms', href: '#terms' },
      { key: 'cookies', href: '#cookies' },
      { key: 'gdpr', href: '#gdpr' },
    ],
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <motion.a
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-4 inline-block"
            >
              CloudSync
            </motion.a>
            <p className="text-sm text-foreground/70 mb-4">
              Where teams collaborate, projects succeed.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-foreground/60 hover:text-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">{t('product.title')}</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                  >
                    {t(`product.links.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">{t('company.title')}</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                  >
                    {t(`company.links.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">{t('resources.title')}</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                  >
                    {t(`resources.links.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">{t('newsletter.title')}</h3>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder={t('newsletter.placeholder')}
                className="mb-2"
              />
              <Button variant="primary" size="sm" className="w-full">
                {t('newsletter.button')}
              </Button>
            </form>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-4">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className="text-xs text-foreground/60 hover:text-foreground transition-colors"
                >
                  {t(`legal.links.${link.key}`)}
                </a>
              ))}
            </div>
            <div className="flex flex-col md:flex-row items-center gap-2">
              <p className="text-xs text-foreground/60">{t('copyright')}</p>
              <span className="text-xs text-foreground/40">•</span>
              <a
                href="https://wistackt.site"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-foreground/60 hover:text-primary transition-colors"
              >
                wistackt.site
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
