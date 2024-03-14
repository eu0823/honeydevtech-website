export type PortfolioItem = {
    type: string;
    index: number;
    website: string;
    imageLink: string;
};

const convertToPortfolioItems = (array: string[]) => {
    return array.map((item: string, index: number) => {
        const splitItem = item.split('_');
        const type = splitItem[0];
        const website = splitItem[1]?.slice(0, -4); // website is the same as item
        const imageLink = item; // image link is the same as item
    
        return {
            type,
            index,
            website,
            imageLink
        };
    });
}

const blockchain_files: string[] = [
    'blockchain10_flashliquidity.finance.png',
    'blockchain11_vitainu.org.png',
    'blockchain12_cyber-arena.co.png',
    'blockchain13_bettsrecruiting.com.png',
    'blockchain14_definitylegend.com.png',
    'blockchain15_annex.finance.png',
    'blockchain16_bitxmi.com.png',
    'blockchain17_marbledao.finance.png',
    'blockchain18_pinksale.finance.png',
    'blockchain19_xsurge.net.png',
    'blockchain1_staging.mewbuilds.com.png',
    'blockchain20_briq.com.png',
    'blockchain2_nftydudes.com.png',
    'blockchain3_mrhb.network.png',
    'blockchain4_avacus.cc.png',
    'blockchain5_hovr.site.png',
    'blockchain6_app.blockumdao.org.png',
    'blockchain7_ruby.exchange.png',
    'blockchain8_ev3.xyz.png',
    'blockchain9_depin.ninja.png',
]

const web_files: string[] = [
    'web33_uconnected.com.au.png',
    'web1_www.pspaws.co.uk.png',
    'web10_coach.io.png',
    'web11_library.fresnostate.edu.png',
    'web12_cps.edu.png',
    'web13_knote.com.png',
    'web14_healthcompare.com.png',
    'web15_shop.sraps.ch.png',
    'web16_kidscity.life.png',
    'web17_blowfire.geex-arts.com.png',
    'web18_jdlandscaping.net.png',
    'web19_kidneython.com.png',
    'web2_langcorrect.com.png',
    'web20_realtor.com.png',
    'web21_greentekreman.com.png',
    'web22_justacredit.com.png',
    'web23_thornlighting.com.au.png',
    'web24_threadstudio.co.ku.png',
    'web25_corpdesign.com.png',
    'web26_thewodlife.com.au.png',
    'web27_saxandthecityband.ie.png',
    'web28_bidfrail.com.png',
    'web29_housinganywhere.com.png',
    'web30_sktthemes.org.png',
    'web31_idpesport.co.uk.png',
    'web32_battinglab.com.png',
    'web3_langcorrect.com.png',
    'web4_har.com.png',
    'web5_aimro.ie.png',
    'web6_shopee.com.my.png',
    'web7_food.grab.com.png',
    'web8_sixplus.com.png',
    'web9_tutorful.co.uk.png'
]

export const web_portfolio: PortfolioItem[] = convertToPortfolioItems(web_files);
export const blockchain_portfolio: PortfolioItem[] = convertToPortfolioItems(blockchain_files);