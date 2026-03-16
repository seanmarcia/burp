import { ArrowLeft, Beaker, CheckCircle, Package, ShieldCheck, Truck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const SOFBRules = () => {
  const navigate = useNavigate();
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="bg-beer-cream/10 min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-beer-amber font-bold mb-12 hover:translate-x-[-4px] transition-transform"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to SOFB Overview
        </button>

        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl border border-beer-brown/5">
          <h1 className="text-4xl md:text-5xl mb-8 text-beer-brown">Competition Rules & Regulations</h1>
          <p className="text-xl text-beer-brown/60 mb-12 leading-relaxed">
            Please read these rules carefully. Failure to comply with bottle, labeling, or shipping requirements may result in disqualification.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <ShieldCheck className="text-beer-amber h-6 w-6" />
                Eligibility & Entry Limits
              </h2>
              <ul className="space-y-4 text-beer-brown/80 leading-relaxed">
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-beer-amber shrink-0 mt-1" />
                  <strong>Beer Only:</strong> This year's competition only accepts beer entries. No mead or cider.
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-beer-amber shrink-0 mt-1" />
                  <strong>Homebrew Only:</strong> All entries must be brewed at home. "Brew on Premise" is allowed, but commercial brewery entries are strictly prohibited.
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-beer-amber shrink-0 mt-1" />
                  <strong>Multiple Entries:</strong> You may enter more than one beer per sub-category, provided they are from different fermentations or use significantly different ingredients.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Beaker className="text-beer-amber h-6 w-6" />
                Bottle & Can Requirements
              </h2>
              <div className="bg-beer-cream/20 p-8 rounded-2xl border border-beer-amber/10">
                <ul className="space-y-4 text-beer-brown/80">
                  <li>• <strong>Format:</strong> Two (2) 10-12 oz. capped bottles OR two (2) 10-12 oz. aluminum cans.</li>
                  <li>• <strong>No Mixing:</strong> Both entries must be in the same format (e.g., no mixing one bottle and one can).</li>
                  <li>• <strong>Appearance:</strong> Bottles (brown or green) and cans must be free of labels, raised glass designs, or brewery logos.</li>
                  <li>• <strong>Caps:</strong> Must be plain or blacked out with a permanent marker.</li>
                  <li>• <strong>Labeling:</strong> Attach labels to each bottle/can using a <strong>rubber band</strong>. Do not use tape or glue.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Truck className="text-beer-amber h-6 w-6" />
                Shipping & Drop-off
              </h2>
              <div className="space-y-6">
                <p className="text-beer-brown/70">
                  <strong>Shipping Window:</strong> February 1, 2026, to April 3, 2026.
                </p>
                <div className="bg-beer-brown text-beer-cream p-6 rounded-2xl shadow-md">
                  <p className="font-bold mb-2 uppercase text-xs tracking-widest text-beer-amber">Shipping Address</p>
                  <p>Maryland Homebrew</p>
                  <p>9017 Mendenhall Ct. Suite C</p>
                  <p>Columbia, MD 21045</p>
                </div>
                <div className="flex items-start gap-4 p-6 border border-beer-brown/10 rounded-2xl">
                  <Package className="h-6 w-6 text-beer-amber shrink-0" />
                  <p className="text-sm text-beer-brown/70 leading-relaxed">
                    <strong>Packing Tip:</strong> Use a sturdy box lined with a plastic bag. Use bubble wrap only as packing material. Mark the box "Fragile. This Side Up." 
                  </p>
                </div>
              </div>
            </section>

            <section className="pt-8 border-t border-beer-brown/10">
              <h2 className="text-2xl font-bold mb-4">Entry Fees</h2>
              <p className="text-3xl text-beer-amber font-bold mb-4">$10.00 <span className="text-sm text-beer-brown/40 font-normal">per entry</span></p>
              <p className="text-beer-brown/60">Payable via PayPal during the online registration process. Major credit and debit cards are accepted.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SOFBRules;
