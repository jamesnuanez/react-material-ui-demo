import React from 'react';
import useAutocomplete from '@material-ui/lab/useAutocomplete';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    position: 'relative',
    display: 'inline-block',
    border: '1px solid #ccc',
    borderRadius: '0.2rem',
  },
  outlined: {
    borderColor: theme.palette.primary.main,
  },
  label: {
    display: 'block',
  },
  input: {
    display: 'inline-block',
    outline: 'none',
    border: 0,
    padding: '0.5rem 1rem',
    borderRadius: '0.2rem',
    fontSize: '1rem',
  },
  listbox: {
    margin: 0,
    padding: 0,
    zIndex: 1,
    border: '1px solid ' + theme.palette.primary.main,
    borderBottomLeftRadius: '0.2rem',
    borderBottomRightRadius: '0.2rem',
    borderTop: 0,
    left: '-1px',
    right: '-1px',
    top: '90%',
    position: 'absolute',
    listStyle: 'none',
    backgroundColor: theme.palette.background.paper,
    overflow: 'auto',
    maxHeight: 200,
    '& li': {
      padding: '0.5rem 1rem',
    },
    '& li[data-focus="true"]': {
      backgroundColor: '#eee',
      cursor: 'pointer',
    },
    '& li:active': {
      backgroundColor: '#2977f5',
      color: 'white',
    },
  },
}));

export default function ChooseAreaCode() {
  const classes = useStyles();
  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: 'use-autocomplete-demo',
    options: areaCodes,
    getOptionLabel: option => option.code,
  });

  return (
    <div
      {...getRootProps()}
      className={
        groupedOptions.length > 0
          ? classes.container + ' ' + classes.outlined
          : classes.container
      }
    >
      <input
        className={classes.input}
        {...getInputProps()}
        placeholder="Area Code"
      />
      {
        groupedOptions.length > 0 &&
        <ul className={classes.listbox} {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <li {...getOptionProps({ option, index })}>{option.code}</li>
          ))}
        </ul>
      }
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const areaCodes = [
  { code: '200' },
  { code: '201' },
  { code: '202' },
  { code: '203' },
  { code: '204' },
  { code: '205' },
  { code: '206' },
  { code: '207' },
  { code: '208' },
  { code: '209' },
  { code: '210' },
  { code: '211' },
  { code: '212' },
  { code: '213' },
  { code: '214' },
  { code: '215' },
  { code: '216' },
  { code: '217' },
  { code: '218' },
  { code: '219' },
  { code: '220' },
  { code: '221' },
  { code: '222' },
  { code: '223' },
  { code: '224' },
  { code: '225' },
  { code: '226' },
  { code: '227' },
  { code: '228' },
  { code: '229' },
  { code: '230' },
  { code: '231' },
  { code: '232' },
  { code: '233' },
  { code: '234' },
  { code: '235' },
  { code: '236' },
  { code: '237' },
  { code: '238' },
  { code: '239' },
  { code: '240' },
  { code: '241' },
  { code: '242' },
  { code: '243' },
  { code: '244' },
  { code: '245' },
  { code: '246' },
  { code: '247' },
  { code: '248' },
  { code: '249' },
  { code: '250' },
  { code: '251' },
  { code: '252' },
  { code: '253' },
  { code: '254' },
  { code: '255' },
  { code: '256' },
  { code: '257' },
  { code: '258' },
  { code: '259' },
  { code: '260' },
  { code: '261' },
  { code: '262' },
  { code: '263' },
  { code: '264' },
  { code: '265' },
  { code: '266' },
  { code: '267' },
  { code: '268' },
  { code: '269' },
  { code: '270' },
  { code: '271' },
  { code: '272' },
  { code: '273' },
  { code: '274' },
  { code: '275' },
  { code: '276' },
  { code: '277' },
  { code: '278' },
  { code: '279' },
  { code: '280' },
  { code: '281' },
  { code: '282' },
  { code: '283' },
  { code: '284' },
  { code: '285' },
  { code: '286' },
  { code: '287' },
  { code: '288' },
  { code: '289' },
  { code: '290' },
  { code: '291' },
  { code: '292' },
  { code: '293' },
  { code: '294' },
  { code: '295' },
  { code: '296' },
  { code: '297' },
  { code: '298' },
  { code: '299' },
  { code: '300' },
  { code: '301' },
  { code: '302' },
  { code: '303' },
  { code: '304' },
  { code: '305' },
  { code: '306' },
  { code: '307' },
  { code: '308' },
  { code: '309' },
  { code: '310' },
  { code: '311' },
  { code: '312' },
  { code: '313' },
  { code: '314' },
  { code: '315' },
  { code: '316' },
  { code: '317' },
  { code: '318' },
  { code: '319' },
  { code: '320' },
  { code: '321' },
  { code: '322' },
  { code: '323' },
  { code: '324' },
  { code: '325' },
  { code: '326' },
  { code: '327' },
  { code: '328' },
  { code: '329' },
  { code: '330' },
  { code: '331' },
  { code: '332' },
  { code: '333' },
  { code: '334' },
  { code: '335' },
  { code: '336' },
  { code: '337' },
  { code: '338' },
  { code: '339' },
  { code: '340' },
  { code: '341' },
  { code: '342' },
  { code: '343' },
  { code: '344' },
  { code: '345' },
  { code: '346' },
  { code: '347' },
  { code: '348' },
  { code: '349' },
  { code: '350' },
  { code: '351' },
  { code: '352' },
  { code: '353' },
  { code: '354' },
  { code: '355' },
  { code: '356' },
  { code: '357' },
  { code: '358' },
  { code: '359' },
  { code: '360' },
  { code: '361' },
  { code: '362' },
  { code: '363' },
  { code: '364' },
  { code: '365' },
  { code: '366' },
  { code: '367' },
  { code: '368' },
  { code: '369' },
  { code: '370' },
  { code: '371' },
  { code: '372' },
  { code: '373' },
  { code: '374' },
  { code: '375' },
  { code: '376' },
  { code: '377' },
  { code: '378' },
  { code: '379' },
  { code: '380' },
  { code: '381' },
  { code: '382' },
  { code: '383' },
  { code: '384' },
  { code: '385' },
  { code: '386' },
  { code: '387' },
  { code: '388' },
  { code: '389' },
  { code: '390' },
  { code: '391' },
  { code: '392' },
  { code: '393' },
  { code: '394' },
  { code: '395' },
  { code: '396' },
  { code: '397' },
  { code: '398' },
  { code: '399' },
  { code: '400' },
  { code: '401' },
  { code: '402' },
  { code: '403' },
  { code: '404' },
  { code: '405' },
  { code: '406' },
  { code: '407' },
  { code: '408' },
  { code: '409' },
  { code: '410' },
  { code: '411' },
  { code: '412' },
  { code: '413' },
  { code: '414' },
  { code: '415' },
  { code: '416' },
  { code: '417' },
  { code: '418' },
  { code: '419' },
  { code: '420' },
  { code: '421' },
  { code: '422' },
  { code: '423' },
  { code: '424' },
  { code: '425' },
  { code: '426' },
  { code: '427' },
  { code: '428' },
  { code: '429' },
  { code: '430' },
  { code: '431' },
  { code: '432' },
  { code: '433' },
  { code: '434' },
  { code: '435' },
  { code: '436' },
  { code: '437' },
  { code: '438' },
  { code: '439' },
  { code: '440' },
  { code: '441' },
  { code: '442' },
  { code: '443' },
  { code: '444' },
  { code: '445' },
  { code: '446' },
  { code: '447' },
  { code: '448' },
  { code: '449' },
  { code: '450' },
  { code: '451' },
  { code: '452' },
  { code: '453' },
  { code: '454' },
  { code: '455' },
  { code: '456' },
  { code: '457' },
  { code: '458' },
  { code: '459' },
  { code: '460' },
  { code: '461' },
  { code: '462' },
  { code: '463' },
  { code: '464' },
  { code: '465' },
  { code: '466' },
  { code: '467' },
  { code: '468' },
  { code: '469' },
  { code: '470' },
  { code: '471' },
  { code: '472' },
  { code: '473' },
  { code: '474' },
  { code: '475' },
  { code: '476' },
  { code: '477' },
  { code: '478' },
  { code: '479' },
  { code: '480' },
  { code: '481' },
  { code: '482' },
  { code: '483' },
  { code: '484' },
  { code: '485' },
  { code: '486' },
  { code: '487' },
  { code: '488' },
  { code: '489' },
  { code: '490' },
  { code: '491' },
  { code: '492' },
  { code: '493' },
  { code: '494' },
  { code: '495' },
  { code: '496' },
  { code: '497' },
  { code: '498' },
  { code: '499' },
  { code: '500' },
  { code: '501' },
  { code: '502' },
  { code: '503' },
  { code: '504' },
  { code: '505' },
  { code: '506' },
  { code: '507' },
  { code: '508' },
  { code: '509' },
  { code: '510' },
  { code: '511' },
  { code: '512' },
  { code: '513' },
  { code: '514' },
  { code: '515' },
  { code: '516' },
  { code: '517' },
  { code: '518' },
  { code: '519' },
  { code: '520' },
  { code: '521' },
  { code: '522' },
  { code: '523' },
  { code: '524' },
  { code: '525' },
  { code: '526' },
  { code: '527' },
  { code: '528' },
  { code: '529' },
  { code: '530' },
  { code: '531' },
  { code: '532' },
  { code: '533' },
  { code: '534' },
  { code: '535' },
  { code: '536' },
  { code: '537' },
  { code: '538' },
  { code: '539' },
  { code: '540' },
  { code: '541' },
  { code: '542' },
  { code: '543' },
  { code: '544' },
  { code: '545' },
  { code: '546' },
  { code: '547' },
  { code: '548' },
  { code: '549' },
  { code: '550' },
  { code: '551' },
  { code: '552' },
  { code: '553' },
  { code: '554' },
  { code: '555' },
  { code: '556' },
  { code: '557' },
  { code: '558' },
  { code: '559' },
  { code: '560' },
  { code: '561' },
  { code: '562' },
  { code: '563' },
  { code: '564' },
  { code: '565' },
  { code: '566' },
  { code: '567' },
  { code: '568' },
  { code: '569' },
  { code: '570' },
  { code: '571' },
  { code: '572' },
  { code: '573' },
  { code: '574' },
  { code: '575' },
  { code: '576' },
  { code: '577' },
  { code: '578' },
  { code: '579' },
  { code: '580' },
  { code: '581' },
  { code: '582' },
  { code: '583' },
  { code: '584' },
  { code: '585' },
  { code: '586' },
  { code: '587' },
  { code: '588' },
  { code: '589' },
  { code: '590' },
  { code: '591' },
  { code: '592' },
  { code: '593' },
  { code: '594' },
  { code: '595' },
  { code: '596' },
  { code: '597' },
  { code: '598' },
  { code: '599' },
  { code: '600' },
  { code: '601' },
  { code: '602' },
  { code: '603' },
  { code: '604' },
  { code: '605' },
  { code: '606' },
  { code: '607' },
  { code: '608' },
  { code: '609' },
  { code: '610' },
  { code: '611' },
  { code: '612' },
  { code: '613' },
  { code: '614' },
  { code: '615' },
  { code: '616' },
  { code: '617' },
  { code: '618' },
  { code: '619' },
  { code: '620' },
  { code: '621' },
  { code: '622' },
  { code: '623' },
  { code: '624' },
  { code: '625' },
  { code: '626' },
  { code: '627' },
  { code: '628' },
  { code: '629' },
  { code: '630' },
  { code: '631' },
  { code: '632' },
  { code: '633' },
  { code: '634' },
  { code: '635' },
  { code: '636' },
  { code: '637' },
  { code: '638' },
  { code: '639' },
  { code: '640' },
  { code: '641' },
  { code: '642' },
  { code: '643' },
  { code: '644' },
  { code: '645' },
  { code: '646' },
  { code: '647' },
  { code: '648' },
  { code: '649' },
  { code: '650' },
  { code: '651' },
  { code: '652' },
  { code: '653' },
  { code: '654' },
  { code: '655' },
  { code: '656' },
  { code: '657' },
  { code: '658' },
  { code: '659' },
  { code: '660' },
  { code: '661' },
  { code: '662' },
  { code: '663' },
  { code: '664' },
  { code: '665' },
  { code: '666' },
  { code: '667' },
  { code: '668' },
  { code: '669' },
  { code: '670' },
  { code: '671' },
  { code: '672' },
  { code: '673' },
  { code: '674' },
  { code: '675' },
  { code: '676' },
  { code: '677' },
  { code: '678' },
  { code: '679' },
  { code: '680' },
  { code: '681' },
  { code: '682' },
  { code: '683' },
  { code: '684' },
  { code: '685' },
  { code: '686' },
  { code: '687' },
  { code: '688' },
  { code: '689' },
  { code: '690' },
  { code: '691' },
  { code: '692' },
  { code: '693' },
  { code: '694' },
  { code: '695' },
  { code: '696' },
  { code: '697' },
  { code: '698' },
  { code: '699' },
  { code: '700' },
  { code: '701' },
  { code: '702' },
  { code: '703' },
  { code: '704' },
  { code: '705' },
  { code: '706' },
  { code: '707' },
  { code: '708' },
  { code: '709' },
  { code: '710' },
  { code: '711' },
  { code: '712' },
  { code: '713' },
  { code: '714' },
  { code: '715' },
  { code: '716' },
  { code: '717' },
  { code: '718' },
  { code: '719' },
  { code: '720' },
  { code: '721' },
  { code: '722' },
  { code: '723' },
  { code: '724' },
  { code: '725' },
  { code: '726' },
  { code: '727' },
  { code: '728' },
  { code: '729' },
  { code: '730' },
  { code: '731' },
  { code: '732' },
  { code: '733' },
  { code: '734' },
  { code: '735' },
  { code: '736' },
  { code: '737' },
  { code: '738' },
  { code: '739' },
  { code: '740' },
  { code: '741' },
  { code: '742' },
  { code: '743' },
  { code: '744' },
  { code: '745' },
  { code: '746' },
  { code: '747' },
  { code: '748' },
  { code: '749' },
  { code: '750' },
  { code: '751' },
  { code: '752' },
  { code: '753' },
  { code: '754' },
  { code: '755' },
  { code: '756' },
  { code: '757' },
  { code: '758' },
  { code: '759' },
  { code: '760' },
  { code: '761' },
  { code: '762' },
  { code: '763' },
  { code: '764' },
  { code: '765' },
  { code: '766' },
  { code: '767' },
  { code: '768' },
  { code: '769' },
  { code: '770' },
  { code: '771' },
  { code: '772' },
  { code: '773' },
  { code: '774' },
  { code: '775' },
  { code: '776' },
  { code: '777' },
  { code: '778' },
  { code: '779' },
  { code: '780' },
  { code: '781' },
  { code: '782' },
  { code: '783' },
  { code: '784' },
  { code: '785' },
  { code: '786' },
  { code: '787' },
  { code: '788' },
  { code: '789' },
  { code: '790' },
  { code: '791' },
  { code: '792' },
  { code: '793' },
  { code: '794' },
  { code: '795' },
  { code: '796' },
  { code: '797' },
  { code: '798' },
  { code: '799' },
  { code: '800' },
  { code: '801' },
  { code: '802' },
  { code: '803' },
  { code: '804' },
  { code: '805' },
  { code: '806' },
  { code: '807' },
  { code: '808' },
  { code: '809' },
  { code: '810' },
  { code: '811' },
  { code: '812' },
  { code: '813' },
  { code: '814' },
  { code: '815' },
  { code: '816' },
  { code: '817' },
  { code: '818' },
  { code: '819' },
  { code: '820' },
  { code: '821' },
  { code: '822' },
  { code: '823' },
  { code: '824' },
  { code: '825' },
  { code: '826' },
  { code: '827' },
  { code: '828' },
  { code: '829' },
  { code: '830' },
  { code: '831' },
  { code: '832' },
  { code: '833' },
  { code: '834' },
  { code: '835' },
  { code: '836' },
  { code: '837' },
  { code: '838' },
  { code: '839' },
  { code: '840' },
  { code: '841' },
  { code: '842' },
  { code: '843' },
  { code: '844' },
  { code: '845' },
  { code: '846' },
  { code: '847' },
  { code: '848' },
  { code: '849' },
  { code: '850' },
  { code: '851' },
  { code: '852' },
  { code: '853' },
  { code: '854' },
  { code: '855' },
  { code: '856' },
  { code: '857' },
  { code: '858' },
  { code: '859' },
  { code: '860' },
  { code: '861' },
  { code: '862' },
  { code: '863' },
  { code: '864' },
  { code: '865' },
  { code: '866' },
  { code: '867' },
  { code: '868' },
  { code: '869' },
  { code: '870' },
  { code: '871' },
  { code: '872' },
  { code: '873' },
  { code: '874' },
  { code: '875' },
  { code: '876' },
  { code: '877' },
  { code: '878' },
  { code: '879' },
  { code: '880' },
  { code: '881' },
  { code: '882' },
  { code: '883' },
  { code: '884' },
  { code: '885' },
  { code: '886' },
  { code: '887' },
  { code: '888' },
  { code: '889' },
  { code: '890' },
  { code: '891' },
  { code: '892' },
  { code: '893' },
  { code: '894' },
  { code: '895' },
  { code: '896' },
  { code: '897' },
  { code: '898' },
  { code: '899' },
  { code: '900' },
  { code: '901' },
  { code: '902' },
  { code: '903' },
  { code: '904' },
  { code: '905' },
  { code: '906' },
  { code: '907' },
  { code: '908' },
  { code: '909' },
  { code: '910' },
  { code: '911' },
  { code: '912' },
  { code: '913' },
  { code: '914' },
  { code: '915' },
  { code: '916' },
  { code: '917' },
  { code: '918' },
  { code: '919' },
  { code: '920' },
  { code: '921' },
  { code: '922' },
  { code: '923' },
  { code: '924' },
  { code: '925' },
  { code: '926' },
  { code: '927' },
  { code: '928' },
  { code: '929' },
  { code: '930' },
  { code: '931' },
  { code: '932' },
  { code: '933' },
  { code: '934' },
  { code: '935' },
  { code: '936' },
  { code: '937' },
  { code: '938' },
  { code: '939' },
  { code: '940' },
  { code: '941' },
  { code: '942' },
  { code: '943' },
  { code: '944' },
  { code: '945' },
  { code: '946' },
  { code: '947' },
  { code: '948' },
  { code: '949' },
  { code: '950' },
  { code: '951' },
  { code: '952' },
  { code: '953' },
  { code: '954' },
  { code: '955' },
  { code: '956' },
  { code: '957' },
  { code: '958' },
  { code: '959' },
  { code: '960' },
  { code: '961' },
  { code: '962' },
  { code: '963' },
  { code: '964' },
  { code: '965' },
  { code: '966' },
  { code: '967' },
  { code: '968' },
  { code: '969' },
  { code: '970' },
  { code: '971' },
  { code: '972' },
  { code: '973' },
  { code: '974' },
  { code: '975' },
  { code: '976' },
  { code: '977' },
  { code: '978' },
  { code: '979' },
  { code: '980' },
  { code: '981' },
  { code: '982' },
  { code: '983' },
  { code: '984' },
  { code: '985' },
  { code: '986' },
  { code: '987' },
  { code: '988' },
  { code: '989' },
  { code: '990' },
  { code: '991' },
  { code: '992' },
  { code: '993' },
  { code: '994' },
  { code: '995' },
  { code: '996' },
  { code: '997' },
  { code: '998' },
  { code: '999' },
];
