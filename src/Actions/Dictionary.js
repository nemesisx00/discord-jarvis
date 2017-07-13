'use strict'

let sprintf = require('sprintf-js').sprintf
let Action = load('Action')
let Util = load('Util')

let urlFormat = 'http://www.dictionaryapi.com/api/v1/references/%s/xml/%s?key=%s'

/* DICTIONARY
<?xml version="1.0" encoding="utf-8" ?>
<entry_list version="1.0">
    <entry id="nemesis">
        <ew>nemesis</ew>
        <subj>MY-1</subj>
        <hw>nem*e*sis</hw>
        <sound>
            <wav>nemesi01.wav</wav>
        </sound>
        <pr>ˈne-mə-səs</pr>
        <fl>noun</fl>
        <et>Latin, from Greek</et>
        <def>
            <date>1561</date>
            <sn>1</sn>
            <slb>capitalized</slb>
            <dt>:the Greek 
                <d_link>goddess</d_link> of retributive justice
            </dt>
            <sn>2</sn>
            <sin>
                <il>plural</il>
                <if>nem*e*ses</if>
                <sound>
                    <wav>nemesi02</wav>
                </sound>
                <pr>-ˌsēz</pr>
            </sin>
            <sn>a</sn>
            <dt>:one that inflicts 
                <d_link>retribution</d_link> or vengeance
            </dt>
            <sn>b</sn>
            <dt>:a formidable and usually victorious 
                <d_link>rival</d_link> or opponent
            </dt>
            <sn>3</sn>
            <sin>
                <il>plural</il>
                <if>nem*e*ses</if>
            </sin>
            <sn>a</sn>
            <dt>:an act or effect of retribution</dt>
            <sn>b</sn>
            <dt>:
                <sx>bane 
                    <sxn>2</sxn>
                </sx>
            </dt>
        </def>
    </entry>
</entry_list>
*/

/* THESAURUS
<?xml version="1.0" encoding="utf-8" ?>
<entry_list version="1.0">
    <entry id="nemesis">
        <term>
            <hw>nemesis</hw>
        </term>
        <fl>noun</fl>
        <sens>
            <sn>1</sn>
            <mc>one who inflicts punishment in return for an injury or offense</mc>
            <vi>Batman is the Joker's main 
                <it>nemesis</it> and always foils his wicked plots
            </vi>
            <syn>avenger, castigator, chastiser, punisher, scourge, vigilante</syn>
            <rel>revenger; redresser, righter; requiter</rel>
            <near>ransomer, redeemer, vindicator</near>
        </sens>
        <sens>
            <sn>2</sn>
            <mc>suffering, loss, or hardship imposed in response to a crime or offense</mc>
            <vi>social ostracism was once society's 
                <it>nemesis</it> for those who defied its sexual mores
            </vi>
            <syn>castigation, chastisement, comeuppance, correction, desert(s), discipline, nemesis, penalty, wrath</syn>
            <rel>reprisal, retaliation, retribution, revenge, vengeance; assessment, charge, fine, mulct; example, sentence; confinement, imprisonment, incarceration; condemnation, damnation, denouncement; censure, criticism, rebuke, reprimand, reproof</rel>
            <near>amnesty, indemnity, pardon, parole; acquittal, exculpation, exoneration, vindication; exemption, immunity, impunity; release; commutation, reprieve; absolution, forgiveness, remission, remitment; condonation, disregard, overlooking</near>
        </sens>
        <sens>
            <sn>3</sn>
            <mc>a source of harm or misfortune</mc>
            <vi>irrationality is the 
                <it>nemesis</it> of democracy, for good government depends upon the wisdom of the electorate
            </vi>
            <syn>affliction, curse, nemesis, scourge</syn>
            <rel>hex, hoodoo, jinx; danger, hazard, menace, peril, risk, threat, trouble; booby trap, catch, pitfall, snag</rel>
            <near>advantage, aid, assistance, gift, help, relief, support; comfort, consolation, solace; delight, joy, pleasure; armor, defense, guard, protection, safeguard, safety, security, shield</near>
            <ant>benefit, blessing, boon, felicity, godsend, good, manna, windfall</ant>
        </sens>
    </entry>
</entry_list>
*/

class Dictionary extends Action
{
	constructor(message, config)
	{
		super(message, config)
	}
	
	async run()
	{
		let args = null
		switch(this.command)
		{
			case 'thesaurus':
				args = this.synonym()
				break
			default:
				args = this.definition()
				break
		}
		
		return await submitRequest(args)
	}
	
	async submitRequest(args)
	{
		
	}
	
	definition(word)
	{
		let val = word
		if(!val)
			val = Util.getFirstWord(this.message)
		
		return {
			key: this.config.dictionary.apiKeys.dictionary.key,
			ref: this.config.dictionary.apiKeys.dictionary.ref,
			word: val
		}
	}
	
	synonym(word)
	{
		let val = word
		if(!val)
			val = Util.getFirstWord(this.message)
		
		return {
			key: this.config.dictionary.apiKeys.thesaurus.key,
			ref: this.config.dictionary.apiKeys.thesaurus.ref,
			word: val
		}
	}
}

module.exports = Dictionary
