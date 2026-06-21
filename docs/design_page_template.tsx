import { CheckCircle, AlertTriangle, XCircle, Info, Star, Heart, Zap, TrendingUp } from 'lucide-react';
import {
    CheckCircleIcon,
    ExclamationTriangleIcon,
    XCircleIcon,
    InformationCircleIcon,
    StarIcon,
    HeartIcon,
    BoltIcon,
    ArrowTrendingUpIcon
} from '@heroicons/react/24/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCheckCircle,
    faExclamationTriangle,
    faTimesCircle,
    faInfoCircle,
    faStar,
    faHeart,
    faBolt,
    faArrowTrendUp
} from '@fortawesome/free-solid-svg-icons';

export default function DesignPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Page Header */}
            <div className="bg-card border-b border-border">
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-4xl font-bold text-foreground mb-2">Design System - Marshall Naquin</h1>
                    <p className="text-muted-foreground">Current styling decisions and alternative options to explore</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 space-y-16">

                {/* ===== COLOR PALETTE SECTION ===== */}
                <section>
                    <h2 className="text-3xl font-bold text-foreground mb-8">Color Palette Options</h2>

                    {/* Current Colors */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-semibold text-foreground mb-4">Current Brand Colors</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-card rounded-lg shadow-md p-6">
                                <div className="w-full h-32 rounded-md mb-4" style={{ backgroundColor: 'hsl(221.2, 83.2%, 53.3%)' }}></div>
                                <h4 className="font-semibold text-foreground mb-2">Brand Blue (Primary)</h4>
                                <p className="text-sm text-muted-foreground mb-1">HSL: 221.2, 83.2%, 53.3%</p>
                                <p className="text-sm text-muted-foreground">HEX: #3b82f6 (approx)</p>
                                <p className="text-xs text-muted-foreground mt-2">Currently used for primary actions</p>
                            </div>

                            <div className="bg-card rounded-lg shadow-md p-6">
                                <div className="w-full h-32 rounded-md mb-4" style={{ backgroundColor: 'hsl(262.1, 83.3%, 57.8%)' }}></div>
                                <h4 className="font-semibold text-foreground mb-2">Brand Purple</h4>
                                <p className="text-sm text-muted-foreground mb-1">HSL: 262.1, 83.3%, 57.8%</p>
                                <p className="text-sm text-muted-foreground">HEX: #a855f7 (approx)</p>
                                <p className="text-xs text-muted-foreground mt-2">Currently secondary/accent</p>
                            </div>

                            <div className="bg-card rounded-lg shadow-md p-6">
                                <div className="w-full h-32 rounded-md mb-4" style={{ backgroundColor: 'hsl(0, 84.2%, 60.2%)' }}></div>
                                <h4 className="font-semibold text-foreground mb-2">Brand Red</h4>
                                <p className="text-sm text-muted-foreground mb-1">HSL: 0, 84.2%, 60.2%</p>
                                <p className="text-sm text-muted-foreground">HEX: #ef4444 (approx)</p>
                                <p className="text-xs text-muted-foreground mt-2">Accent color - currently for destructive actions</p>
                            </div>
                        </div>
                    </div>

                    {/* Alternative Palette Options */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-semibold text-foreground mb-4">Alternative Color Palette Options</h3>

                        {/* Option 1: Trust & Reliability (Blue-focused) */}
                        <div className="bg-card rounded-lg shadow-md p-6 mb-6">
                            <h4 className="text-xl font-semibold text-foreground mb-4">Option 1: Trust & Reliability (Blue-focused)</h4>
                            <p className="text-muted-foreground mb-4">Good for: Corporate, professional, trustworthy brand image</p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div>
                                    <div className="w-full h-24 rounded-md mb-2" style={{ backgroundColor: '#1e3a8a' }}></div>
                                    <p className="text-sm font-medium">Navy Blue</p>
                                    <p className="text-xs text-muted-foreground">#1e3a8a</p>
                                    <p className="text-xs text-muted-foreground">Primary</p>
                                </div>
                                <div>
                                    <div className="w-full h-24 rounded-md mb-2" style={{ backgroundColor: '#3b82f6' }}></div>
                                    <p className="text-sm font-medium">Bright Blue</p>
                                    <p className="text-xs text-muted-foreground">#3b82f6</p>
                                    <p className="text-xs text-muted-foreground">Secondary</p>
                                </div>
                                <div>
                                    <div className="w-full h-24 rounded-md mb-2" style={{ backgroundColor: '#dc2626' }}></div>
                                    <p className="text-sm font-medium">Red Accent</p>
                                    <p className="text-xs text-muted-foreground">#dc2626</p>
                                    <p className="text-xs text-muted-foreground">CTA</p>
                                </div>
                                <div>
                                    <div className="w-full h-24 rounded-md mb-2" style={{ backgroundColor: '#334155' }}></div>
                                    <p className="text-sm font-medium">Slate Gray</p>
                                    <p className="text-xs text-muted-foreground">#334155</p>
                                    <p className="text-xs text-muted-foreground">Text</p>
                                </div>
                            </div>
                        </div>

                        {/* Option 2: Modern & Energetic (Purple + Red) */}
                        <div className="bg-card rounded-lg shadow-md p-6 mb-6">
                            <h4 className="text-xl font-semibold text-foreground mb-4">Option 2: Modern & Energetic (Purple + Red)</h4>
                            <p className="text-muted-foreground mb-4">Good for: Creative, innovative, dynamic brand image</p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div>
                                    <div className="w-full h-24 rounded-md mb-2" style={{ backgroundColor: '#7c3aed' }}></div>
                                    <p className="text-sm font-medium">Violet</p>
                                    <p className="text-xs text-muted-foreground">#7c3aed</p>
                                    <p className="text-xs text-muted-foreground">Primary</p>
                                </div>
                                <div>
                                    <div className="w-full h-24 rounded-md mb-2" style={{ backgroundColor: '#ec4899' }}></div>
                                    <p className="text-sm font-medium">Pink</p>
                                    <p className="text-xs text-muted-foreground">#ec4899</p>
                                    <p className="text-xs text-muted-foreground">Secondary</p>
                                </div>
                                <div>
                                    <div className="w-full h-24 rounded-md mb-2" style={{ backgroundColor: '#f97316' }}></div>
                                    <p className="text-sm font-medium">Orange</p>
                                    <p className="text-xs text-muted-foreground">#f97316</p>
                                    <p className="text-xs text-muted-foreground">CTA</p>
                                </div>
                                <div>
                                    <div className="w-full h-24 rounded-md mb-2" style={{ backgroundColor: '#1f2937' }}></div>
                                    <p className="text-sm font-medium">Charcoal</p>
                                    <p className="text-xs text-muted-foreground">#1f2937</p>
                                    <p className="text-xs text-muted-foreground">Text</p>
                                </div>
                            </div>
                        </div>

                        {/* Option 3: Warm & Approachable */}
                        <div className="bg-card rounded-lg shadow-md p-6 mb-6">
                            <h4 className="text-xl font-semibold text-foreground mb-4">Option 3: Warm & Approachable (Warm tones)</h4>
                            <p className="text-muted-foreground mb-4">Good for: Friendly, welcoming, approachable brand</p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div>
                                    <div className="w-full h-24 rounded-md mb-2" style={{ backgroundColor: '#0c4a6e' }}></div>
                                    <p className="text-sm font-medium">Deep Blue</p>
                                    <p className="text-xs text-muted-foreground">#0c4a6e</p>
                                    <p className="text-xs text-muted-foreground">Primary</p>
                                </div>
                                <div>
                                    <div className="w-full h-24 rounded-md mb-2" style={{ backgroundColor: '#b45309' }}></div>
                                    <p className="text-sm font-medium">Amber</p>
                                    <p className="text-xs text-muted-foreground">#b45309</p>
                                    <p className="text-xs text-muted-foreground">Secondary</p>
                                </div>
                                <div>
                                    <div className="w-full h-24 rounded-md mb-2" style={{ backgroundColor: '#dc2626' }}></div>
                                    <p className="text-sm font-medium">Crimson</p>
                                    <p className="text-xs text-muted-foreground">#dc2626</p>
                                    <p className="text-xs text-muted-foreground">CTA</p>
                                </div>
                                <div>
                                    <div className="w-full h-24 rounded-md mb-2" style={{ backgroundColor: '#292524' }}></div>
                                    <p className="text-sm font-medium">Stone Dark</p>
                                    <p className="text-xs text-muted-foreground">#292524</p>
                                    <p className="text-xs text-muted-foreground">Text</p>
                                </div>
                            </div>
                        </div>

                        {/* Option 4: Clean & Minimal (Monochrome + Accent) */}
                        <div className="bg-card rounded-lg shadow-md p-6 mb-6">
                            <h4 className="text-xl font-semibold text-foreground mb-4">Option 4: Clean & Minimal (Monochrome + Accent)</h4>
                            <p className="text-muted-foreground mb-4">Good for: Modern, sophisticated, timeless brand</p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div>
                                    <div className="w-full h-24 rounded-md mb-2 border border-border" style={{ backgroundColor: '#ffffff' }}></div>
                                    <p className="text-sm font-medium">White</p>
                                    <p className="text-xs text-muted-foreground">#ffffff</p>
                                    <p className="text-xs text-muted-foreground">Primary BG</p>
                                </div>
                                <div>
                                    <div className="w-full h-24 rounded-md mb-2" style={{ backgroundColor: '#0f172a' }}></div>
                                    <p className="text-sm font-medium">Slate 900</p>
                                    <p className="text-xs text-muted-foreground">#0f172a</p>
                                    <p className="text-xs text-muted-foreground">Secondary</p>
                                </div>
                                <div>
                                    <div className="w-full h-24 rounded-md mb-2" style={{ backgroundColor: '#ef4444' }}></div>
                                    <p className="text-sm font-medium">Red</p>
                                    <p className="text-xs text-muted-foreground">#ef4444</p>
                                    <p className="text-xs text-muted-foreground">CTA</p>
                                </div>
                                <div>
                                    <div className="w-full h-24 rounded-md mb-2" style={{ backgroundColor: '#374151' }}></div>
                                    <p className="text-sm font-medium">Gray 700</p>
                                    <p className="text-xs text-muted-foreground">#374151</p>
                                    <p className="text-xs text-muted-foreground">Text</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== TYPOGRAPHY SECTION ===== */}
                <section>
                    <h2 className="text-3xl font-bold text-foreground mb-8">Typography Options</h2>

                    {/* Current Font */}
                    <div className="bg-card rounded-lg shadow-md p-6 mb-6">
                        <h3 className="text-2xl font-semibold text-foreground mb-4">Current: Inter (All text)</h3>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-muted-foreground mb-2">Heading Example</p>
                                <h1 className="text-4xl font-bold text-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>
                                    Marshall Naquin - [Your Tagline]
                                </h1>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground mb-2">Body Text Example</p>
                                <p className="text-lg text-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>
                                    [Your project description goes here. Describe what your business does and how you help your customers.]
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Typography Option 1: Professional Sans-Serif */}
                    <div className="bg-card rounded-lg shadow-md p-6 mb-6">
                        <h3 className="text-2xl font-semibold text-foreground mb-4">Option 1: Roboto (Professional Sans-Serif)</h3>
                        <p className="text-muted-foreground mb-4">Good for: Clean, modern, highly readable. Google's signature font.</p>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-muted-foreground mb-2">Heading Example</p>
                                <h1 className="text-4xl font-bold text-foreground" style={{ fontFamily: 'Roboto, sans-serif' }}>
                                    Marshall Naquin - [Your Tagline]
                                </h1>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground mb-2">Body Text Example</p>
                                <p className="text-lg text-foreground" style={{ fontFamily: 'Roboto, sans-serif' }}>
                                    [Your project description goes here.]
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Typography Option 2: Geometric Modern */}
                    <div className="bg-card rounded-lg shadow-md p-6 mb-6">
                        <h3 className="text-2xl font-semibold text-foreground mb-4">Option 2: Montserrat Headings + Open Sans Body</h3>
                        <p className="text-muted-foreground mb-4">Good for: Modern, geometric, professional with personality.</p>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-muted-foreground mb-2">Heading Example (Montserrat)</p>
                                <h1 className="text-4xl font-bold text-foreground" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                    Marshall Naquin - [Your Tagline]
                                </h1>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground mb-2">Body Text Example (Open Sans)</p>
                                <p className="text-lg text-foreground" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                                    [Your project description goes here.]
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Typography Option 3: Classic with Serif */}
                    <div className="bg-card rounded-lg shadow-md p-6 mb-6">
                        <h3 className="text-2xl font-semibold text-foreground mb-4">Option 3: Playfair Display Headings + Inter Body</h3>
                        <p className="text-muted-foreground mb-4">Good for: Classic, trustworthy, established brand feel.</p>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-muted-foreground mb-2">Heading Example (Playfair Display)</p>
                                <h1 className="text-4xl font-bold text-foreground" style={{ fontFamily: 'Playfair Display, serif' }}>
                                    Marshall Naquin - [Your Tagline]
                                </h1>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground mb-2">Body Text Example (Inter)</p>
                                <p className="text-lg text-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>
                                    [Your project description goes here.]
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Typography Option 4: Friendly/Approachable */}
                    <div className="bg-card rounded-lg shadow-md p-6 mb-6">
                        <h3 className="text-2xl font-semibold text-foreground mb-4">Option 4: Nunito (Friendly, Rounded)</h3>
                        <p className="text-muted-foreground mb-4">Good for: Approachable, friendly, welcoming brand.</p>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-muted-foreground mb-2">Heading Example</p>
                                <h1 className="text-4xl font-bold text-foreground" style={{ fontFamily: 'Nunito, sans-serif' }}>
                                    Marshall Naquin - [Your Tagline]
                                </h1>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground mb-2">Body Text Example</p>
                                <p className="text-lg text-foreground" style={{ fontFamily: 'Nunito, sans-serif' }}>
                                    [Your project description goes here.]
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Typography Option 5: Tech/Startup */}
                    <div className="bg-card rounded-lg shadow-md p-6 mb-6">
                        <h3 className="text-2xl font-semibold text-foreground mb-4">Option 5: Poppins (Modern Tech)</h3>
                        <p className="text-muted-foreground mb-4">Good for: Tech-forward, modern startup feel.</p>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-muted-foreground mb-2">Heading Example</p>
                                <h1 className="text-4xl font-bold text-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    Marshall Naquin - [Your Tagline]
                                </h1>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground mb-2">Body Text Example</p>
                                <p className="text-lg text-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    [Your project description goes here.]
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== BUTTON STYLES SECTION ===== */}
                <section>
                    <h2 className="text-3xl font-bold text-foreground mb-8">Button Style Options</h2>
                    <p className="text-muted-foreground mb-6">Note: In your project, define button utility classes (`.btn-primary`, `.btn-secondary`) in `app/globals.css` and use those instead of inline styles.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Current Button Style */}
                        <div className="bg-card rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold text-foreground mb-4">Current: Rounded with Shadow</h3>
                            <div className="space-y-4">
                                <button className="px-6 py-3 bg-primary text-card rounded-lg hover:opacity-90 transition-colors shadow-md">
                                    Primary Button
                                </button>
                                <button className="px-6 py-3 bg-card text-primary rounded-lg border-2 border-primary hover:bg-muted transition-colors">
                                    Secondary Button
                                </button>
                                <button className="px-6 py-3 text-primary hover:opacity-80 hover:underline transition-colors">
                                    Text Button
                                </button>
                            </div>
                        </div>

                        {/* Pill-Shaped */}
                        <div className="bg-card rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold text-foreground mb-4">Option 1: Pill-Shaped (Fully Rounded)</h3>
                            <div className="space-y-4">
                                <button className="px-8 py-3 bg-primary text-card rounded-full hover:opacity-90 transition-colors shadow-md">
                                    Primary Button
                                </button>
                                <button className="px-8 py-3 bg-card text-primary rounded-full border-2 border-primary hover:bg-muted transition-colors">
                                    Secondary Button
                                </button>
                                <button className="px-8 py-3 text-primary hover:opacity-80 hover:underline transition-colors">
                                    Text Button
                                </button>
                            </div>
                        </div>

                        {/* Sharp Corners */}
                        <div className="bg-card rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold text-foreground mb-4">Option 2: Sharp Corners (Modern)</h3>
                            <div className="space-y-4">
                                <button className="px-6 py-3 bg-primary text-card hover:opacity-90 transition-colors shadow-md">
                                    Primary Button
                                </button>
                                <button className="px-6 py-3 bg-card text-primary border-2 border-primary hover:bg-muted transition-colors">
                                    Secondary Button
                                </button>
                                <button className="px-6 py-3 text-primary hover:opacity-80 hover:underline transition-colors">
                                    Text Button
                                </button>
                            </div>
                        </div>

                        {/* Subtle Rounded */}
                        <div className="bg-card rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold text-foreground mb-4">Option 3: Subtle Rounded (Balanced)</h3>
                            <div className="space-y-4">
                                <button className="px-6 py-3 bg-primary text-card rounded hover:opacity-90 transition-colors shadow-md">
                                    Primary Button
                                </button>
                                <button className="px-6 py-3 bg-card text-primary rounded border-2 border-primary hover:bg-muted transition-colors">
                                    Secondary Button
                                </button>
                                <button className="px-6 py-3 text-primary hover:opacity-80 hover:underline transition-colors">
                                    Text Button
                                </button>
                            </div>
                        </div>

                        {/* Bold with Gradient */}
                        <div className="bg-card rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold text-foreground mb-4">Option 4: Gradient (Bold)</h3>
                            <div className="space-y-4">
                                <button className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-card rounded-lg hover:opacity-90 transition-all shadow-md">
                                    Primary Button
                                </button>
                                <button className="px-6 py-3 bg-card text-primary rounded-lg border-2 border-primary hover:bg-muted transition-colors">
                                    Secondary Button
                                </button>
                                <button className="px-6 py-3 text-primary hover:opacity-80 hover:underline transition-colors">
                                    Text Button
                                </button>
                            </div>
                        </div>

                        {/* Outlined Ghost */}
                        <div className="bg-card rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold text-foreground mb-4">Option 5: Ghost (Minimal)</h3>
                            <div className="space-y-4">
                                <button className="px-6 py-3 bg-primary text-card rounded-lg hover:opacity-90 transition-colors">
                                    Primary Button
                                </button>
                                <button className="px-6 py-3 text-primary rounded-lg hover:bg-muted transition-colors">
                                    Secondary Button
                                </button>
                                <button className="px-6 py-3 text-primary hover:opacity-80 hover:bg-muted rounded transition-colors">
                                    Text Button
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== ICON SHOWCASE SECTION ===== */}
                <section>
                    <h2 className="text-3xl font-bold text-foreground mb-8">Icon Library Comparison</h2>
                    <p className="text-muted-foreground mb-8">Compare three popular icon libraries to choose your preferred style</p>

                    {/* Lucide Icons */}
                    <div className="bg-card rounded-lg shadow-md p-6 mb-8">
                        <h3 className="text-xl font-semibold text-foreground mb-2">Option 1: Lucide Icons</h3>
                        <p className="text-muted-foreground mb-4">Clean, consistent, modern icon set with 1400+ icons. Lightweight and tree-shakeable.</p>

                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-6">
                            <div className="flex flex-col items-center">
                                <CheckCircle className="w-8 h-8 text-green-600 mb-2" />
                                <p className="text-xs text-muted-foreground">CheckCircle</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <AlertTriangle className="w-8 h-8 text-yellow-600 mb-2" />
                                <p className="text-xs text-muted-foreground">AlertTriangle</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <XCircle className="w-8 h-8 text-red-600 mb-2" />
                                <p className="text-xs text-muted-foreground">XCircle</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <Info className="w-8 h-8 text-blue-600 mb-2" />
                                <p className="text-xs text-muted-foreground">Info</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <Star className="w-8 h-8 text-yellow-500 mb-2" />
                                <p className="text-xs text-muted-foreground">Star</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <Heart className="w-8 h-8 text-red-500 mb-2" />
                                <p className="text-xs text-muted-foreground">Heart</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <Zap className="w-8 h-8 text-purple-600 mb-2" />
                                <p className="text-xs text-muted-foreground">Zap</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <TrendingUp className="w-8 h-8 text-green-600 mb-2" />
                                <p className="text-xs text-muted-foreground">TrendingUp</p>
                            </div>
                        </div>

                        <div className="p-4 bg-muted rounded-lg">
                            <p className="text-sm text-foreground mb-2">
                                <strong>✓ Pros:</strong> Very lightweight, modern design, consistent stroke width, excellent TypeScript support
                            </p>
                            <p className="text-sm text-foreground mb-2">
                                <strong>✗ Cons:</strong> Smaller selection than Font Awesome
                            </p>
                            <p className="text-sm text-foreground mt-3">
                                <strong>Usage:</strong> <code className="bg-card px-2 py-1 rounded text-xs">import &#123; IconName &#125; from 'lucide-react'</code>
                            </p>
                            <p className="text-sm text-foreground mt-2">
                                <strong>Size:</strong> <code className="bg-card px-2 py-1 rounded text-xs">className="w-8 h-8"</code>
                            </p>
                        </div>
                    </div>

                    {/* Heroicons */}
                    <div className="bg-card rounded-lg shadow-md p-6 mb-8">
                        <h3 className="text-xl font-semibold text-foreground mb-2">Option 2: Heroicons</h3>
                        <p className="text-muted-foreground mb-4">Beautiful hand-crafted SVG icons by the makers of Tailwind CSS. 292 icons in 3 styles (outline, solid, mini).</p>

                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-6">
                            <div className="flex flex-col items-center">
                                <CheckCircleIcon className="w-8 h-8 text-green-600 mb-2" />
                                <p className="text-xs text-muted-foreground">CheckCircle</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <ExclamationTriangleIcon className="w-8 h-8 text-yellow-600 mb-2" />
                                <p className="text-xs text-muted-foreground">ExclamationTriangle</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <XCircleIcon className="w-8 h-8 text-red-600 mb-2" />
                                <p className="text-xs text-muted-foreground">XCircle</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <InformationCircleIcon className="w-8 h-8 text-blue-600 mb-2" />
                                <p className="text-xs text-muted-foreground">Information</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <StarIcon className="w-8 h-8 text-yellow-500 mb-2" />
                                <p className="text-xs text-muted-foreground">Star</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <HeartIcon className="w-8 h-8 text-red-500 mb-2" />
                                <p className="text-xs text-muted-foreground">Heart</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <BoltIcon className="w-8 h-8 text-purple-600 mb-2" />
                                <p className="text-xs text-muted-foreground">Bolt</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <ArrowTrendingUpIcon className="w-8 h-8 text-green-600 mb-2" />
                                <p className="text-xs text-muted-foreground">ArrowTrendingUp</p>
                            </div>
                        </div>

                        <div className="p-4 bg-muted rounded-lg">
                            <p className="text-sm text-foreground mb-2">
                                <strong>✓ Pros:</strong> Perfect Tailwind integration, hand-crafted quality, 3 style variants (outline/solid/mini), MIT licensed
                            </p>
                            <p className="text-sm text-foreground mb-2">
                                <strong>✗ Cons:</strong> Smaller selection (292 icons), more limited variety
                            </p>
                            <p className="text-sm text-foreground mt-3">
                                <strong>Usage:</strong> <code className="bg-card px-2 py-1 rounded text-xs">import &#123; IconName &#125; from '@heroicons/react/24/solid'</code>
                            </p>
                            <p className="text-sm text-foreground mt-2">
                                <strong>Size:</strong> <code className="bg-card px-2 py-1 rounded text-xs">className="w-8 h-8"</code>
                            </p>
                        </div>
                    </div>

                    {/* Font Awesome */}
                    <div className="bg-card rounded-lg shadow-md p-6 mb-8">
                        <h3 className="text-xl font-semibold text-foreground mb-2">Option 3: Font Awesome</h3>
                        <p className="text-muted-foreground mb-4">Industry standard with 2000+ free icons (30,000+ in Pro). Comprehensive coverage of every use case.</p>

                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-6">
                            <div className="flex flex-col items-center">
                                <FontAwesomeIcon icon={faCheckCircle} className="w-8 h-8 text-green-600 mb-2" />
                                <p className="text-xs text-muted-foreground">faCheckCircle</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <FontAwesomeIcon icon={faExclamationTriangle} className="w-8 h-8 text-yellow-600 mb-2" />
                                <p className="text-xs text-muted-foreground">faExclamationTriangle</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <FontAwesomeIcon icon={faTimesCircle} className="w-8 h-8 text-red-600 mb-2" />
                                <p className="text-xs text-muted-foreground">faTimesCircle</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <FontAwesomeIcon icon={faInfoCircle} className="w-8 h-8 text-blue-600 mb-2" />
                                <p className="text-xs text-muted-foreground">faInfoCircle</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <FontAwesomeIcon icon={faStar} className="w-8 h-8 text-yellow-500 mb-2" />
                                <p className="text-xs text-muted-foreground">faStar</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <FontAwesomeIcon icon={faHeart} className="w-8 h-8 text-red-500 mb-2" />
                                <p className="text-xs text-muted-foreground">faHeart</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <FontAwesomeIcon icon={faBolt} className="w-8 h-8 text-purple-600 mb-2" />
                                <p className="text-xs text-muted-foreground">faBolt</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <FontAwesomeIcon icon={faArrowTrendUp} className="w-8 h-8 text-green-600 mb-2" />
                                <p className="text-xs text-muted-foreground">faArrowTrendUp</p>
                            </div>
                        </div>

                        <div className="p-4 bg-muted rounded-lg">
                            <p className="text-sm text-foreground mb-2">
                                <strong>✓ Pros:</strong> Massive icon selection (2000+ free), widely recognized, comprehensive, multiple styles (solid/regular/brands)
                            </p>
                            <p className="text-sm text-foreground mb-2">
                                <strong>✗ Cons:</strong> Heavier bundle size, requires wrapper component, more complex setup
                            </p>
                            <p className="text-sm text-foreground mt-3">
                                <strong>Usage:</strong> <code className="bg-card px-2 py-1 rounded text-xs">{'<FontAwesomeIcon icon={faIcon} />'}</code>
                            </p>
                            <p className="text-sm text-foreground mt-2">
                                <strong>Size:</strong> <code className="bg-card px-2 py-1 rounded text-xs">className="w-8 h-8"</code>
                            </p>
                        </div>
                    </div>

                    {/* Comparison Table */}
                    <div className="bg-muted border-2 border-primary rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-4">Quick Comparison</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b-2 border-primary">
                                        <th className="text-left py-2 px-4 text-foreground">Feature</th>
                                        <th className="text-left py-2 px-4 text-foreground">Lucide</th>
                                        <th className="text-left py-2 px-4 text-foreground">Heroicons</th>
                                        <th className="text-left py-2 px-4 text-foreground">Font Awesome</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-border">
                                        <td className="py-2 px-4 font-medium text-foreground">Icon Count</td>
                                        <td className="py-2 px-4 text-foreground">1400+</td>
                                        <td className="py-2 px-4 text-foreground">292</td>
                                        <td className="py-2 px-4 text-foreground">2000+ (free)</td>
                                    </tr>
                                    <tr className="border-b border-border">
                                        <td className="py-2 px-4 font-medium text-foreground">Bundle Size</td>
                                        <td className="py-2 px-4 text-green-600">Smallest</td>
                                        <td className="py-2 px-4 text-green-600">Small</td>
                                        <td className="py-2 px-4 text-yellow-600">Larger</td>
                                    </tr>
                                    <tr className="border-b border-border">
                                        <td className="py-2 px-4 font-medium text-foreground">Tailwind Integration</td>
                                        <td className="py-2 px-4 text-foreground">Excellent</td>
                                        <td className="py-2 px-4 text-green-600">Perfect</td>
                                        <td className="py-2 px-4 text-foreground">Good</td>
                                    </tr>
                                    <tr className="border-b border-border">
                                        <td className="py-2 px-4 font-medium text-foreground">Design Style</td>
                                        <td className="py-2 px-4 text-foreground">Modern, minimal</td>
                                        <td className="py-2 px-4 text-foreground">Hand-crafted, refined</td>
                                        <td className="py-2 px-4 text-foreground">Comprehensive, varied</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 font-medium text-foreground">Best For</td>
                                        <td className="py-2 px-4 text-foreground">Modern apps</td>
                                        <td className="py-2 px-4 text-foreground">Tailwind projects</td>
                                        <td className="py-2 px-4 text-foreground">Maximum variety</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* ===== SPACING & LAYOUT SECTION ===== */}
                <section>
                    <h2 className="text-3xl font-bold text-foreground mb-8">Spacing & Layout Examples</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Compact Spacing */}
                        <div className="bg-card rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold text-foreground mb-4">Compact Spacing</h3>
                            <div className="space-y-2">
                                <div className="bg-muted p-2 rounded">Element 1</div>
                                <div className="bg-muted p-2 rounded">Element 2</div>
                                <div className="bg-muted p-2 rounded">Element 3</div>
                            </div>
                            <p className="text-sm text-muted-foreground mt-4">Gap: 0.5rem (8px)</p>
                        </div>

                        {/* Comfortable Spacing */}
                        <div className="bg-card rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold text-foreground mb-4">Comfortable Spacing</h3>
                            <div className="space-y-4">
                                <div className="bg-muted p-4 rounded">Element 1</div>
                                <div className="bg-muted p-4 rounded">Element 2</div>
                                <div className="bg-muted p-4 rounded">Element 3</div>
                            </div>
                            <p className="text-sm text-muted-foreground mt-4">Gap: 1rem (16px)</p>
                        </div>

                        {/* Generous Spacing */}
                        <div className="bg-card rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold text-foreground mb-4">Generous Spacing</h3>
                            <div className="space-y-6">
                                <div className="bg-muted p-6 rounded">Element 1</div>
                                <div className="bg-muted p-6 rounded">Element 2</div>
                                <div className="bg-muted p-6 rounded">Element 3</div>
                            </div>
                            <p className="text-sm text-muted-foreground mt-4">Gap: 1.5rem (24px)</p>
                        </div>

                        {/* Extra Generous */}
                        <div className="bg-card rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold text-foreground mb-4">Extra Generous Spacing</h3>
                            <div className="space-y-8">
                                <div className="bg-muted p-8 rounded">Element 1</div>
                                <div className="bg-muted p-8 rounded">Element 2</div>
                                <div className="bg-muted p-8 rounded">Element 3</div>
                            </div>
                            <p className="text-sm text-muted-foreground mt-4">Gap: 2rem (32px)</p>
                        </div>
                    </div>
                </section>

                {/* ===== CARD STYLES SECTION ===== */}
                <section>
                    <h2 className="text-3xl font-bold text-foreground mb-8">Card Style Options</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Shadow Card */}
                        <div className="bg-card rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                            <h3 className="text-lg font-semibold text-foreground mb-2">Shadow Card</h3>
                            <p className="text-muted-foreground mb-4">Subtle shadow with hover effect</p>
                            <button className="text-primary hover:opacity-80 text-sm font-medium">Learn More →</button>
                        </div>

                        {/* Border Card */}
                        <div className="bg-card rounded-lg border-2 border-border p-6 hover:border-primary transition-colors">
                            <h3 className="text-lg font-semibold text-foreground mb-2">Border Card</h3>
                            <p className="text-muted-foreground mb-4">Border-based with color change on hover</p>
                            <button className="text-primary hover:opacity-80 text-sm font-medium">Learn More →</button>
                        </div>

                        {/* Elevated Card */}
                        <div className="bg-card rounded-lg shadow-xl p-6 hover:shadow-2xl hover:-translate-y-1 transition-all">
                            <h3 className="text-lg font-semibold text-foreground mb-2">Elevated Card</h3>
                            <p className="text-muted-foreground mb-4">Strong shadow with lift effect</p>
                            <button className="text-primary hover:opacity-80 text-sm font-medium">Learn More →</button>
                        </div>

                        {/* Gradient Border Card */}
                        <div className="bg-card rounded-lg p-6 relative overflow-hidden" style={{ boxShadow: '0 0 0 2px transparent', background: 'linear-gradient(var(--color-card), var(--color-card)) padding-box, linear-gradient(to right, var(--color-primary), var(--color-secondary)) border-box', border: '2px solid transparent' }}>
                            <h3 className="text-lg font-semibold text-foreground mb-2">Gradient Border</h3>
                            <p className="text-muted-foreground mb-4">Gradient border effect</p>
                            <button className="text-primary hover:opacity-80 text-sm font-medium">Learn More →</button>
                        </div>

                        {/* Filled Card */}
                        <div className="bg-muted rounded-lg border border-border p-6 hover:bg-muted/80 transition-colors">
                            <h3 className="text-lg font-semibold text-foreground mb-2">Filled Card</h3>
                            <p className="text-muted-foreground mb-4">Subtle background color</p>
                            <button className="text-primary hover:opacity-80 text-sm font-medium">Learn More →</button>
                        </div>

                        {/* Minimal Card */}
                        <div className="bg-card rounded-lg p-6 hover:bg-muted transition-colors">
                            <h3 className="text-lg font-semibold text-foreground mb-2">Minimal Card</h3>
                            <p className="text-muted-foreground mb-4">No border or shadow, just hover bg</p>
                            <button className="text-primary hover:opacity-80 text-sm font-medium">Learn More →</button>
                        </div>
                    </div>
                </section>

                {/* ===== DECISION SUMMARY ===== */}
                <section className="bg-muted border-2 border-primary rounded-lg p-8">
                    <h2 className="text-3xl font-bold text-foreground mb-4">Decision Checklist</h2>
                    <p className="text-foreground mb-6">After reviewing the options above, you'll need to decide on:</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-card rounded-lg p-4">
                            <h3 className="font-semibold text-foreground mb-2">✓ Color Palette</h3>
                            <p className="text-sm text-muted-foreground">Which color scheme best represents Marshall Naquin?</p>
                        </div>
                        <div className="bg-card rounded-lg p-4">
                            <h3 className="font-semibold text-foreground mb-2">✓ Typography</h3>
                            <p className="text-sm text-muted-foreground">Heading and body font combination</p>
                        </div>
                        <div className="bg-card rounded-lg p-4">
                            <h3 className="font-semibold text-foreground mb-2">✓ Button Style</h3>
                            <p className="text-sm text-muted-foreground">Shape, color, and hover effects</p>
                        </div>
                        <div className="bg-card rounded-lg p-4">
                            <h3 className="font-semibold text-foreground mb-2">✓ Spacing</h3>
                            <p className="text-sm text-muted-foreground">Compact, comfortable, or generous?</p>
                        </div>
                        <div className="bg-card rounded-lg p-4">
                            <h3 className="font-semibold text-foreground mb-2">✓ Card Style</h3>
                            <p className="text-sm text-muted-foreground">How should content cards look?</p>
                        </div>
                        <div className="bg-card rounded-lg p-4">
                            <h3 className="font-semibold text-foreground mb-2">✓ Icon Library</h3>
                            <p className="text-sm text-muted-foreground">Lucide, Heroicons, or Font Awesome?</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
